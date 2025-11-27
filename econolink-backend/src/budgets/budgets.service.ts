import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CreateBudgetDto } from "./dto/create-budget.dto";
import { UpdateBudgetDto } from "./dto/update-budget.dto";
import { BudgetStatus } from "./types/TBudgetStatus";
import { Prisma } from "@prisma/client";

@Injectable()
export class BudgetsService {
  constructor(private prisma: PrismaService) {}

  // CREATE
  async create(userId: string, dto: CreateBudgetDto) {
    return this.prisma.budgets.create({
      data: {
        name: dto.name,
        amount: dto.amount,
        period: dto.period ?? "MONTHLY",
        start_date: new Date(dto.start_date),
        end_date: dto.end_date ? new Date(dto.end_date) : null,
        alert_at: dto.alert_at ?? null,
        category_id: dto.category_id ?? null,
        spent: 0,
        user_id: userId,
      },
    });
  }

  // LIST (raw SQL for view)
  async findAll(userId: string): Promise<BudgetStatus[]> {
    return this.prisma.$queryRaw<BudgetStatus[]>`
    SELECT * FROM budget_status WHERE user_id = ${userId}
  `;
  }

  // LIST (raw SQL for view)
  async findOne(id: string, userId: string) {
    const result = await this.prisma.$queryRaw<BudgetStatus[]>`
    SELECT * FROM budget_status
    WHERE id = ${id} AND user_id = ${userId}
  `;

    if (result.length === 0) throw new NotFoundException("Budget not found");
    return result[0];
  }

  // UPDATE
  async update(id: string, userId: string, dto: UpdateBudgetDto) {
    await this.checkExist(id, userId);

    return this.prisma.budgets.update({
      where: { id },
      data: dto,
    });
  }

  // DELETE
  async remove(id: string, userId: string) {
    await this.checkExist(id, userId);
    return this.prisma.budgets.delete({ where: { id } });
  }

  // intern Logic
  private async checkExist(id: string, userId: string) {
    const exist = await this.prisma.budgets.findFirst({
      where: { id, user_id: userId },
    });

    if (!exist) throw new NotFoundException("Budget not found");
  }

  // Add spent (on transaction)
  async addSpent(id: string, amount: number) {
    return this.prisma.budgets.update({
      where: { id },
      data: {
        spent: { increment: amount },
      },
    });
  }

  // Reset (new period)
  async resetMonthly(userId: string) {
    return this.prisma.budgets.updateMany({
      where: { user_id: userId, period: "MONTHLY" },
      data: {
        spent: 0,
        start_date: new Date(),
      },
    });
  }

  // get budgets ALERT + EXCEEDED
  async getAlerts(userId: string): Promise<BudgetStatus[]> {
    return this.prisma.$queryRaw<BudgetStatus[]>(
      Prisma.sql`
        SELECT *
        FROM budget_status
        WHERE user_id = ${userId}
        AND status IN ('ALERT', 'EXCEEDED')
      `,
    );
  }

  // STATS Budget
  async getStats(userId: string): Promise<{
    total_amount: number;
    total_spent: number;
    alert_count: number;
    exceeded_count: number;
  }> {
    const result = await this.prisma.$queryRaw<
      Array<{
        total_amount: number;
        total_spent: number;
        alert_count: number;
        exceeded_count: number;
      }>
    >(Prisma.sql`
    SELECT
      COALESCE(SUM(amount), 0)::text AS total_amount,
      COALESCE(SUM(spent), 0)::text AS total_spent,
      COUNT(CASE WHEN status = 'ALERT' THEN 1 END)::text AS alert_count,
      COUNT(CASE WHEN status = 'EXCEEDED' THEN 1 END)::text AS exceeded_count
    FROM budget_status
    WHERE user_id = ${userId}
  `);

    return (
      result[0] ?? {
        total_amount: 0,
        total_spent: 0,
        alert_count: 0,
        exceeded_count: 0,
      }
    );
  }
}
