import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { AccountAddDto } from "./dto/AccountAdd.dto";
import { AccountUpdateDto } from "./dto/AccountUpdateDto";

@Injectable()
export class AccountService {
  constructor(private prisma: PrismaService) {}

  async getAll(user_id: string) {
    const account = await this.prisma.accounts.findMany({
      where: { user_id: user_id },
      orderBy: [{ type: "asc" }, { name: "asc" }],
    });
    return account;
  }

  async create(dto: AccountAddDto) {
    const account = await this.prisma.accounts.create({
      data: { ...dto },
    });
    return account;
  }

  async update(dto: AccountUpdateDto) {
    const account = await this.prisma.accounts.update({
      where: { id: dto.id },
      data: { ...dto },
    });
    return account;
  }

  async delete(id: string) {
    const account = await this.prisma.accounts.delete({
      where: { id: id },
    });
    return account;
  }
}
