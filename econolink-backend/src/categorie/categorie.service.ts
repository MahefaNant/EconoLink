import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { CategorieUpdateDto } from "./dto/categorieUpdate.dto";
import { CategorieAddDto } from "./dto/categorieAdd.dto";
import { transaction_type } from "@prisma/client";

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
      orderBy: [{ user_id: "asc" }, { type: "asc" }, { name: "asc" }],
    });
    if (!categories) return [];
    return categories;
  }

  async getByType(user_id: string, type: transaction_type) {
    const categories = await this.prisma.categories.findMany({
      where: {
        type: type,
        OR: [
          { user_id: user_id },
          { user_id: null }, //
        ],
      },
      orderBy: [{ user_id: "asc" }, { type: "asc" }, { name: "asc" }],
    });
    if (!categories) return [];
    return categories;
  }

  async create(dto: CategorieAddDto, user_id: string) {
    const categories = await this.prisma.categories.create({
      data: { ...dto, user_id: user_id },
    });
    return categories;
  }

  async update(id: string, user_id: string, dto: CategorieUpdateDto) {
    const categorie = await this.prisma.categories.update({
      where: { id: id, user_id: user_id },
      data: { ...dto },
    });
    return categorie;
  }

  async delete(id: string, user_id: string) {
    const categorie = await this.prisma.categories.delete({
      where: { id: id, user_id: user_id },
    });
    return categorie;
  }
}
