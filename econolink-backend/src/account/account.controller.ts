/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  Req,
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
  async getAll(@Req() req: any) {
    return await this.accountService.getAll(req.user.id);
  }

  @UseGuards(JwtAuthGuard)
  @Post("create")
  async create(@Body() dto: AccountDto, @Req() req: any) {
    return await this.accountService.create(dto, req.user.id);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(":id")
  async update(
    @Param("id") id: string,
    @Body() dto: AccountDto,
    @Req() req: any,
  ) {
    return await this.accountService.update(id, req.user.id, dto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(":id")
  async delete(@Param("id") id: string, @Req() req: any) {
    return await this.accountService.delete(id, req.user.id);
  }

  @UseGuards(JwtAuthGuard)
  @Patch("state/:id")
  async setState(
    @Param("id") id: string,
    @Query("state") state: boolean,
    @Req() req: any,
  ) {
    return await this.accountService.setState(id, req.user.id, state);
  }
}
