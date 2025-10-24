import { Body, Controller, Get, Post, Query, UseGuards } from "@nestjs/common";
import { AccountService } from "./account.service";
import { JwtAuthGuard } from "src/auth/jwt/jwt-auth.guard";
import { AccountAddDto } from "./dto/AccountAdd.dto";
import { AccountUpdateDto } from "./dto/AccountUpdateDto";

@Controller("account")
export class AccountController {
  constructor(private readonly accountService: AccountService) {}

  @UseGuards(JwtAuthGuard)
  @Get("all")
  async getAll(@Query("user_id") user_id: string) {
    return await this.accountService.getAll(user_id);
  }

  @UseGuards(JwtAuthGuard)
  @Post("create")
  async create(@Body() dto: AccountAddDto) {
    return await this.accountService.create(dto);
  }

  @UseGuards(JwtAuthGuard)
  @Post("update")
  async update(@Body() dto: AccountUpdateDto) {
    return await this.accountService.update(dto);
  }

  @UseGuards(JwtAuthGuard)
  @Post("delete")
  async delete(@Query("id") id: string) {
    return await this.accountService.delete(id);
  }
}
