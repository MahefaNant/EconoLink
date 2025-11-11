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
  Req,
  UseGuards,
} from "@nestjs/common";
import { TransactionService } from "./transaction.service";
import { JwtAuthGuard } from "src/auth/jwt/jwt-auth.guard";
import { CreateTransactionDto } from "./dto/create-transaction.dto";
import { UpdateTransactionDto } from "./dto/update-transaction.dto";

@Controller("transaction")
export class TransactionController {
  constructor(private readonly transactionService: TransactionService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  async create(@Body() dto: CreateTransactionDto, @Req() req: any) {
    const userId = req.user.id;
    return this.transactionService.create(dto, userId);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  async findAll(@Req() req: any) {
    const userId = req.user.id;
    return this.transactionService.findAll(userId);
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
