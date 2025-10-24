import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { CategorieUpdateDto } from "./dto/categorieUpdate.dto";
import { CategorieAddDto } from "./dto/categorieAdd.dto";

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

  async create(dto: CategorieAddDto) {
    const categories = await this.prisma.categories.create({
      data: { ...dto },
    });
    return categories;
  }

  async update(dto: CategorieUpdateDto) {
    const categorie = await this.prisma.categories.update({
      where: { id: dto.id },
      data: { ...dto },
    });
    return categorie;
  }

  async delete(id: string) {
    const categorie = await this.prisma.categories.delete({
      where: { id: id },
    });
    return categorie;
  }
}
