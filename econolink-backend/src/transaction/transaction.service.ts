/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import {
  BadRequestException,
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

  async getDashboardStats(
    userId: string,
    period: "month" | "quarter" | "year" = "month",
  ) {
    await this.prisma.$executeRaw`SELECT refresh_all_stats()`;
    const dateFilter = this.getDateFilter(period);

    const [financialStats, categoryStats, transferStats, recentTrends] =
      await Promise.all([
        this.prisma.$queryRaw<
          Array<{
            total_count: number | null;
            total_income: number | null;
            total_expense: number | null;
            net_cash_flow: number | null;
            avg_income: number | null;
            avg_expense: number | null;
            largest_transaction: number | null;
          }>
        >`
        SELECT 
          SUM(transaction_count)::text as total_count,
          SUM(total_income)::text as total_income,
          SUM(total_expense)::text as total_expense,
          SUM(net_cash_flow)::text as net_cash_flow,
          AVG(avg_income)::text as avg_income,
          AVG(avg_expense)::text as avg_expense,
          MAX(largest_transaction)::text as largest_transaction
        FROM monthly_financial_stats
        WHERE user_id = ${userId}
          AND month >= ${dateFilter}
      `,

        // Top catégories
        this.prisma.$queryRaw`
        SELECT 
          category_name,
          type,
          total_amount,
          transaction_count
        FROM category_stats 
        WHERE user_id = ${userId}
        ORDER BY total_amount DESC
        LIMIT 5
      `,

        // Stats transfers
        this.prisma.$queryRaw<
          Array<{
            total_transfers: number | null;
            total_transferred: number | null;
          }>
        >`
        SELECT 
          SUM(transfer_count)::text as total_transfers,
          SUM(total_transferred) as total_transferred
        FROM transfer_stats 
        WHERE user_id = ${userId}
        AND month >= ${dateFilter}
      `,

        // Trends last 6 months
        this.prisma.$queryRaw`
        SELECT 
          TO_CHAR(month, 'YYYY-MM') as period,
          total_income,
          total_expense,
          net_cash_flow,
          transaction_count
        FROM monthly_financial_stats 
        WHERE user_id = ${userId}
        AND month >= DATE_TRUNC('month', NOW() - INTERVAL '6 months')
        ORDER BY month DESC
      `,
      ]);

    const f = financialStats[0];

    const toNum = (v: any) => (v === null ? null : Number(v));

    return {
      financial: {
        total_count: toNum(f?.total_count),
        total_income: toNum(f?.total_income),
        total_expense: toNum(f?.total_expense),
        net_cash_flow: toNum(f?.net_cash_flow),
        avg_income: toNum(f?.avg_income),
        avg_expense: toNum(f?.avg_expense),
        largest_transaction: toNum(f?.largest_transaction),
      },
      topCategories: categoryStats,
      transfers: transferStats[0],
      trends: recentTrends,
      period,
      generatedAt: new Date(),
    };
  }

  async getBasicStats(userId: string, startDate?: string, endDate?: string) {
    await this.prisma.$executeRaw`SELECT refresh_all_stats()`;
    const whereClause: any = {
      user_id: userId,
      type: { in: ["INCOME", "EXPENSE"] }, // EXCLUDE TRANSFERTS
    };

    if (startDate || endDate) {
      whereClause.date = {};
      if (startDate) whereClause.date.gte = new Date(startDate);
      if (endDate) whereClause.date.lte = new Date(endDate);
    }

    const [totalCount, incomeSum, expenseSum, transferCount] =
      await Promise.all([
        this.prisma.transactions.count({ where: whereClause }),
        this.prisma.transactions.aggregate({
          where: { ...whereClause, type: "INCOME" },
          _sum: { amount: true },
        }),
        this.prisma.transactions.aggregate({
          where: { ...whereClause, type: "EXPENSE" },
          _sum: { amount: true },
        }),
        this.prisma.transactions.count({
          where: {
            user_id: userId,
            type: "TRANSFER",
            ...(startDate || endDate
              ? {
                  date: {
                    ...(startDate ? { gte: new Date(startDate) } : {}),
                    ...(endDate ? { lte: new Date(endDate) } : {}),
                  },
                }
              : {}),
          },
        }),
      ]);

    return {
      totalCount,
      totalIncome: Number(incomeSum._sum.amount) || 0,
      totalExpense: Number(expenseSum._sum.amount) || 0,
      net:
        (Number(incomeSum._sum.amount) || 0) -
        (Number(expenseSum._sum.amount) || 0),
      transferCount,
    };
  }

  private getDateFilter(period: string): Date {
    const now = new Date();
    switch (period) {
      case "month":
        return new Date(now.getFullYear(), now.getMonth(), 1);
      case "quarter":
        return new Date(now.getFullYear(), now.getMonth() - 3, 1);
      case "year":
        return new Date(now.getFullYear(), 0, 1);
      default:
        return new Date(now.getFullYear(), now.getMonth(), 1);
    }
  }

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

    // Construction of where clause
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

    // Request for Datas
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
    // VALIDATION TRANSFER
    if (dto.type === "TRANSFER") {
      if (!dto.to_account_id) {
        throw new BadRequestException(
          "to_account_id is required for TRANSFER transactions",
        );
      }
      if (dto.account_id === dto.to_account_id) {
        throw new BadRequestException("Cannot transfer to the same account");
      }
      // Forced category_id to null for the transferts
      dto.category_id = null;
    } else {
      // for INCOME/EXPENSE, to_account_id must be null
      dto.to_account_id = null;
    }
    return await this.prisma.transactions.create({
      data: {
        ...dto,
        user_id: userId,
        is_synced: dto.is_synced ?? true,
        date: dto.date !== undefined ? dto.date : null,
      },
      include: {
        categories: true,
      },
    });
  }

  async update(id: string, dto: UpdateTransactionDto, userId: string) {
    await this.ensureOwnership(id, userId);

    if (dto.type === "TRANSFER") {
      if (!dto.to_account_id) {
        throw new BadRequestException(
          "to_account_id is required for TRANSFER transactions",
        );
      }
      dto.category_id = null;
    } else if (dto.type) {
      dto.to_account_id = null;
    }

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
