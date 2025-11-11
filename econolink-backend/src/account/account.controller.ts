import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  UseGuards,
} from "@nestjs/common";
import { AccountService } from "./account.service";
import { JwtAuthGuard } from "src/auth/jwt/jwt-auth.guard";
import { AccountDto } from "./dto/AccountDto";

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
  async create(@Body() dto: AccountDto) {
    return await this.accountService.create(dto);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(":id")
  async update(@Param("id") id: string, @Body() dto: AccountDto) {
    return await this.accountService.update(id, dto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(":id")
  async delete(@Param("id") id: string) {
    return await this.accountService.delete(id);
  }

  @UseGuards(JwtAuthGuard)
  @Patch("state/:id")
  async setState(@Param("id") id: string, @Query("state") state: boolean) {
    return await this.accountService.setState(id, state);
  }
}
