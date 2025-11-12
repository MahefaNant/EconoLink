/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import {
  ForbiddenException,
  Injectable,
  NotFoundException,
} from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateTransactionDto } from "./dto/create-transaction.dto";
import { UpdateTransactionDto } from "./dto/update-transaction.dto";
import { TransactionQueryDto } from "./dto/transaction-query.dto";

@Injectable()
export class TransactionService {
  constructor(private prisma: PrismaService) {}

  async findAll(userId: string, query: TransactionQueryDto) {
    const {
      page = 1,
      limit = 10,
      search,
      type,
      startDate,
      endDate,
      sortBy = "date",
      sortOrder = "desc",
    } = query;

    const skip = (page - 1) * limit;

    // Construction du where clause
    const where: any = { user_id: userId };

    if (search) {
      where.OR = [
        { description: { contains: search, mode: "insensitive" } },
        { notes: { contains: search, mode: "insensitive" } },
      ];
    }

    if (type && type !== "ALL") {
      where.type = type;
    }

    if (startDate || endDate) {
      where.date = {};
      if (startDate) where.date.gte = new Date(startDate);
      if (endDate) where.date.lte = new Date(endDate);
    }

    // Requête pour les données
    const [transactions, total] = await Promise.all([
      this.prisma.transactions.findMany({
        where,
        orderBy: { [sortBy]: sortOrder },
        skip,
        take: limit,
        include: {
          categories: true,
        },
      }),
      this.prisma.transactions.count({ where }),
    ]);

    return {
      data: transactions,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit),
        hasNext: page * limit < total,
        hasPrev: page > 1,
      },
    };
  }

  async findOne(id: string, userId: string) {
    const tx = await this.prisma.transactions.findFirst({
      where: { id, user_id: userId },
      include: {
        categories: true,
      },
    });

    if (!tx) throw new NotFoundException("Transaction not found");
    return tx;
  }

  async create(dto: CreateTransactionDto, userId: string) {
    return await this.prisma.transactions.create({
      data: {
        ...dto,
        user_id: userId,
        is_synced: dto.is_synced ?? true,
      },
      include: {
        categories: true,
      },
    });
  }

  async update(id: string, dto: UpdateTransactionDto, userId: string) {
    await this.ensureOwnership(id, userId);

    return await this.prisma.transactions.update({
      where: { id },
      data: {
        ...dto,
        updated_at: new Date(),
      },
      include: {
        categories: true,
      },
    });
  }

  async delete(id: string, userId: string) {
    await this.ensureOwnership(id, userId);

    return await this.prisma.transactions.delete({
      where: { id },
    });
  }

  // statistics
  async getStats(userId: string, startDate?: string, endDate?: string) {
    const where: any = { user_id: userId };

    if (startDate || endDate) {
      where.date = {};
      if (startDate) where.date.gte = new Date(startDate);
      if (endDate) where.date.lte = new Date(endDate);
    }

    const [totalCount, incomeSum, expenseSum] = await Promise.all([
      this.prisma.transactions.count({ where }),
      this.prisma.transactions.aggregate({
        where: { ...where, type: "INCOME" },
        _sum: { amount: true },
      }),
      this.prisma.transactions.aggregate({
        where: { ...where, type: "EXPENSE" },
        _sum: { amount: true },
      }),
    ]);

    // Conversion des BigInt/Decimal en Number
    const totalIncome = Number(incomeSum._sum.amount) || 0;
    const totalExpense = Number(expenseSum._sum.amount) || 0;

    return {
      totalCount,
      totalIncome,
      totalExpense,
      net: totalIncome - totalExpense,
    };
  }

  /**
   * Utility: prevents users from editing other users' data.
   */
  private async ensureOwnership(id: string, userId: string) {
    const tx = await this.prisma.transactions.findUnique({ where: { id } });

    if (!tx) throw new NotFoundException("Transaction not found");
    if (tx.user_id !== userId) throw new ForbiddenException("Not allowed");
  }
}
