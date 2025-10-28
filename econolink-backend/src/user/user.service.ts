/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async findById(id: string) {
    const user = await this.prisma.users.findUnique({ where: { id } });
    if (!user) throw new NotFoundException("User not found");
    return user;
  }

  async updateFields(id: string, updates: Record<string, any>) {
    const nonEditable = [
      "language",
      "timezone",
      "theme",
      "created_at",
      "updated_at",
      "id",
      "password", // password ignoré aussi
    ];

    const allowedUpdates: Record<string, any> = {};
    for (const [key, value] of Object.entries(updates)) {
      if (!nonEditable.includes(key)) {
        allowedUpdates[key] = value;
      }
    }

    if (Object.keys(allowedUpdates).length === 0) {
      throw new BadRequestException("No editable fields provided");
    }

    allowedUpdates.updated_at = new Date();

    const user = await this.prisma.users.update({
      where: { id },
      data: allowedUpdates,
    });

    return user;
  }
}
