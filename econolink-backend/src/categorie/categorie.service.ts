/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Injectable } from "@nestjs/common";
import { CategorieDto } from "./dto/categorie.dto";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class CategorieService {
  constructor(private prisma: PrismaService) {}

  async getAll(user_id: string) {
    const categories = await this.prisma.categories.findMany({
      where: {
        OR: [
          { user_id: user_id },
          { user_id: null }, //
        ],
      },
      orderBy: [{ type: "asc" }, { name: "asc" }],
    });
    if (!categories) return [];
    return categories;
  }

  async create(dto: CategorieDto) {
    const categories = await this.prisma.categories.create({
      data: { ...dto },
    });
    return categories;
  }
}
