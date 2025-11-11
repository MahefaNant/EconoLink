import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { AccountDto } from "./dto/AccountDto";

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

  async create(dto: AccountDto, user_id: string) {
    const account = await this.prisma.accounts.create({
      data: { ...dto, user_id: user_id },
    });
    return account;
  }

  async update(id: string, user_id: string, dto: AccountDto) {
    const account = await this.prisma.accounts.update({
      where: { id: id, user_id: user_id },
      data: { ...dto },
    });
    return account;
  }

  async delete(id: string, user_id: string) {
    const account = await this.prisma.accounts.delete({
      where: { id: id, user_id: user_id },
    });
    return account;
  }

  /*----- State----------------*/

  async setState(id: string, user_id: string, state: boolean) {
    const account = await this.prisma.accounts.update({
      where: { id: id, user_id: user_id },
      data: { is_active: state },
    });
    return account;
  }
}
