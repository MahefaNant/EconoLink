/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import {
  Injectable,
  NotFoundException,
  ForbiddenException,
} from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CreateGoalDto } from "./dto/create-goal.dto";
import { UpdateGoalDto } from "./dto/update-goal.dto";
import { Prisma } from "@prisma/client";

@Injectable()
export class GoalsService {
  constructor(private prisma: PrismaService) {}

  async create(userId: string, data: CreateGoalDto) {
    return this.prisma.goals.create({
      data: {
        ...data,
        user_id: userId,
      },
    });
  }

  async findAll(userId: string, filters: any) {
    const page = Number(filters.page) || 1;
    const limit = Number(filters.limit) || 10;
    const skip = (page - 1) * limit;

    const where = {
      user_id: userId,
      ...(filters.search && {
        name: {
          contains: filters.search,
          mode: "insensitive",
        },
      }),
    };

    const orderBy = filters.orderBy
      ? { [filters.orderBy]: filters.order || ("desc" as Prisma.SortOrder) }
      : { created_at: "desc" as Prisma.SortOrder };

    const [items, total] = await this.prisma.$transaction([
      this.prisma.goals.findMany({
        where,
        skip,
        take: limit,
        orderBy,
      }),
      this.prisma.goals.count({ where }),
    ]);

    return {
      page,
      limit,
      total,
      pages: Math.ceil(total / limit),
      data: items,
    };
  }

  async findOne(id: string, userId: string) {
    const goal = await this.prisma.goals.findUnique({ where: { id } });
    if (!goal) throw new NotFoundException("Goal not found");
    if (goal.user_id !== userId) throw new ForbiddenException();
    return goal;
  }

  async update(id: string, userId: string, data: UpdateGoalDto) {
    await this.findOne(id, userId);
    return this.prisma.goals.update({
      where: { id },
      data: {
        ...data,
        updated_at: new Date(),
      },
    });
  }

  async delete(id: string, userId: string) {
    await this.findOne(id, userId);
    return this.prisma.goals.delete({ where: { id } });
  }

  async addProgress(id: string, amount: number, userId: string) {
    const goal = await this.findOne(id, userId);

    return this.prisma.goals.update({
      where: { id },
      data: {
        current: Number(goal.current || 0) + amount,
        updated_at: new Date(),
      },
    });
  }
}
