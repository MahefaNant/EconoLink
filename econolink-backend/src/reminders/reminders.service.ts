import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { Prisma } from "@prisma/client";
import { CreateReminderDto } from "./dto/create-reminder.dto";
import { UpdateReminderDto } from "./dto/update-reminder.dto";
import { RemindersOrderField, RemindersFilters } from "./types/reminders.types";

@Injectable()
export class RemindersService {
  constructor(private prisma: PrismaService) {}

  private readonly allowedOrderFields: RemindersOrderField[] = [
    "created_at",
    "updated_at",
    "due_date",
    "title",
  ];

  // 📌 CREATE
  async create(userId: string, data: CreateReminderDto) {
    return this.prisma.reminders.create({
      data: {
        ...data,
        due_date: new Date(data.due_date),
        user_id: userId,
      },
    });
  }

  // 📌 FIND ALL with filters, pagination, order, search
  async findAll(userId: string, filters: RemindersFilters) {
    const page = Number(filters.page) || 1;
    const limit = Number(filters.limit) || 10;
    const skip = (page - 1) * limit;

    const orderField = this.allowedOrderFields.includes(filters.orderBy!)
      ? filters.orderBy
      : "due_date";

    const orderBy: Prisma.remindersOrderByWithRelationInput = {
      [orderField!]: (filters.order || "asc") as Prisma.SortOrder,
    };

    const where: Prisma.remindersWhereInput = {
      user_id: userId,

      ...(filters.search && {
        OR: [
          { title: { contains: filters.search, mode: "insensitive" } },
          { description: { contains: filters.search, mode: "insensitive" } },
        ],
      }),

      ...(filters.is_completed !== undefined && {
        is_completed: filters.is_completed,
      }),

      ...(filters.is_recurring !== undefined && {
        is_recurring: filters.is_recurring,
      }),

      ...(filters.date_from || filters.date_to
        ? {
            due_date: {
              ...(filters.date_from
                ? { gte: new Date(filters.date_from) }
                : {}),
              ...(filters.date_to ? { lte: new Date(filters.date_to) } : {}),
            },
          }
        : {}),
    };

    // ✔ FIX exactOptionalPropertyTypes
    const query: Prisma.remindersFindManyArgs = {
      where,
      orderBy,
      take: limit,
      skip,
    };

    if (filters.cursor) {
      query.cursor = { id: filters.cursor };
      query.skip = 1;
    }

    const [items, total] = await this.prisma.$transaction([
      this.prisma.reminders.findMany(query),
      this.prisma.reminders.count({ where }),
    ]);

    const lastItem = items.length > 0 ? items[items.length - 1] : null;

    return {
      page,
      limit,
      total,
      pages: Math.ceil(total / limit),
      hasMore: items.length === limit,
      nextCursor: lastItem ? lastItem.id : null,
      data: items,
    };
  }

  // 📌 FIND ONE
  async findOne(id: string, userId: string) {
    const item = await this.prisma.reminders.findFirst({
      where: { id, user_id: userId },
    });

    if (!item) throw new NotFoundException("Reminder not found");
    return item;
  }

  // 📌 UPDATE
  async update(id: string, userId: string, data: UpdateReminderDto) {
    await this.findOne(id, userId);

    return this.prisma.reminders.update({
      where: { id },
      data: {
        ...data,
        ...(data.due_date && { due_date: new Date(data.due_date) }),
      },
    });
  }

  // 📌 DELETE
  async remove(id: string, userId: string) {
    await this.findOne(id, userId);

    return this.prisma.reminders.delete({
      where: { id },
    });
  }
}
