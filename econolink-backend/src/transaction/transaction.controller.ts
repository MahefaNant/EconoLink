/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
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
import { TransactionService } from "./transaction.service";
import { JwtAuthGuard } from "src/auth/jwt/jwt-auth.guard";
import { CreateTransactionDto } from "./dto/create-transaction.dto";
import { UpdateTransactionDto } from "./dto/update-transaction.dto";
import { TransactionQueryDto } from "./dto/transaction-query.dto";

@Controller("transaction")
export class TransactionController {
  constructor(private readonly transactionService: TransactionService) {}

  @UseGuards(JwtAuthGuard)
  @Get("dashboard")
  async getDashboardStats(
    @Query("period") period: "month" | "quarter" | "year",
    @Req() req: any,
  ) {
    const userId = req.user.id;
    return this.transactionService.getDashboardStats(userId, period);
  }

  @UseGuards(JwtAuthGuard)
  @Get("basic")
  async getBasicStats(
    @Query("startDate") startDate?: string,
    @Query("endDate") endDate?: string,
    @Req() req?: any,
  ) {
    const userId = req.user.id;
    return this.transactionService.getBasicStats(userId, startDate, endDate);
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  async create(@Body() dto: CreateTransactionDto, @Req() req: any) {
    const userId = req.user.id;
    return this.transactionService.create(dto, userId);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  async findAll(@Query() query: TransactionQueryDto, @Req() req: any) {
    const userId = req.user.id;
    return this.transactionService.findAll(userId, query);
  }

  @UseGuards(JwtAuthGuard)
  @Get("stats")
  async getStats(
    @Query("startDate") startDate?: string,
    @Query("endDate") endDate?: string,
    @Req() req?: any,
  ) {
    const userId = req.user.id;
    return this.transactionService.getStats(userId, startDate, endDate);
  }

  @UseGuards(JwtAuthGuard)
  @Get(":id")
  async findOne(@Param("id") id: string, @Req() req: any) {
    const userId = req.user.id;
    return this.transactionService.findOne(id, userId);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(":id")
  async update(
    @Param("id") id: string,
    @Body() dto: UpdateTransactionDto,
    @Req() req: any,
  ) {
    const userId = req.user.id;
    return this.transactionService.update(id, dto, userId);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(":id")
  async delete(@Param("id") id: string, @Req() req: any) {
    const userId = req.user.id;
    return this.transactionService.delete(id, userId);
  }
}
