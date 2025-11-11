import {
  ForbiddenException,
  Injectable,
  NotFoundException,
} from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateTransactionDto } from "./dto/create-transaction.dto";
import { UpdateTransactionDto } from "./dto/update-transaction.dto";

@Injectable()
export class TransactionService {
  constructor(private prisma: PrismaService) {}

  async findAll(userId: string) {
    return await this.prisma.transactions.findMany({
      where: { user_id: userId },
      orderBy: { date: "desc" },
    });
  }

  async findOne(id: string, userId: string) {
    const tx = await this.prisma.transactions.findFirst({
      where: { id, user_id: userId },
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
    });
  }

  async delete(id: string, userId: string) {
    await this.ensureOwnership(id, userId);

    return await this.prisma.transactions.delete({
      where: { id },
    });
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
