/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import {
  Body,
  Controller,
  Get,
  Post,
  Param,
  Patch,
  Delete,
  UseGuards,
  Req,
} from "@nestjs/common";
import { BudgetsService } from "./budgets.service";
import { CreateBudgetDto } from "./dto/create-budget.dto";
import { UpdateBudgetDto } from "./dto/update-budget.dto";
import { JwtAuthGuard } from "src/auth/jwt/jwt-auth.guard";

@Controller("budgets")
@UseGuards(JwtAuthGuard)
export class BudgetsController {
  constructor(private readonly budgetsService: BudgetsService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Req() req: any, @Body() dto: CreateBudgetDto) {
    return this.budgetsService.create(req.user.id, dto);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll(@Req() req: any) {
    return this.budgetsService.findAll(req.user.id);
  }

  @UseGuards(JwtAuthGuard)
  @Get(":id")
  findOne(@Req() req: any, @Param("id") id: string) {
    return this.budgetsService.findOne(id, req.user.id);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(":id")
  update(
    @Req() req: any,
    @Param("id") id: string,
    @Body() dto: UpdateBudgetDto,
  ) {
    return this.budgetsService.update(id, req.user.id, dto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(":id")
  remove(@Req() req: any, @Param("id") id: string) {
    return this.budgetsService.remove(id, req.user.id);
  }

  @UseGuards(JwtAuthGuard)
  @Get("/alerts/all")
  async getAlerts() {
    const userId = "USER_CONTEXT";
    return this.budgetsService.getAlerts(userId);
  }

  @UseGuards(JwtAuthGuard)
  @Get("/stats/all")
  async getStats() {
    const userId = "USER_CONTEXT";
    return this.budgetsService.getStats(userId);
  }
}
