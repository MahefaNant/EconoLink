/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Param,
  Body,
  Req,
  UseGuards,
} from "@nestjs/common";
import { GoalsService } from "./goals.service";
import { CreateGoalDto } from "./dto/create-goal.dto";
import { UpdateGoalDto } from "./dto/update-goal.dto";
import { JwtAuthGuard } from "src/auth/jwt/jwt-auth.guard";

@Controller("goals")
export class GoalsController {
  constructor(private readonly goalsService: GoalsService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Req() req: any, @Body() dto: CreateGoalDto) {
    return this.goalsService.create(req.user.id, dto);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll(@Req() req: any) {
    return this.goalsService.findAll(req.user.id);
  }

  @UseGuards(JwtAuthGuard)
  @Get(":id")
  findOne(@Req() req: any, @Param("id") id: string) {
    return this.goalsService.findOne(id, req.user.id);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(":id")
  update(@Req() req: any, @Param("id") id: string, @Body() dto: UpdateGoalDto) {
    return this.goalsService.update(id, req.user.id, dto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(":id")
  remove(@Req() req: any, @Param("id") id: string) {
    return this.goalsService.delete(id, req.user.id);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(":id/add-progress")
  addProgress(
    @Req() req: any,
    @Param("id") id: string,
    @Body() body: { amount: number },
  ) {
    return this.goalsService.addProgress(id, body.amount, req.user.id);
  }
}
