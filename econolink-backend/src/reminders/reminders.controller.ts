/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Body,
  Param,
  Req,
  Query,
  UseGuards,
} from "@nestjs/common";
import { RemindersService } from "./reminders.service";
import { CreateReminderDto } from "./dto/create-reminder.dto";
import { UpdateReminderDto } from "./dto/update-reminder.dto";
import type { RemindersFilters } from "./types/reminders.types";
import { JwtAuthGuard } from "src/auth/jwt/jwt-auth.guard";

@Controller("reminders")
export class RemindersController {
  constructor(private service: RemindersService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Req() req: any, @Body() dto: CreateReminderDto) {
    return this.service.create(req.user.id, dto);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  list(@Req() req: any, @Query() filters: RemindersFilters) {
    return this.service.findAll(req.user.id, filters);
  }

  @UseGuards(JwtAuthGuard)
  @Get(":id")
  getOne(@Req() req: any, @Param("id") id: string) {
    return this.service.findOne(id, req.user.id);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(":id")
  update(
    @Req() req: any,
    @Param("id") id: string,
    @Body() dto: UpdateReminderDto,
  ) {
    return this.service.update(id, req.user.id, dto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(":id")
  delete(@Req() req: any, @Param("id") id: string) {
    return this.service.remove(id, req.user.id);
  }
}
