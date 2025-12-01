import {
  IsString,
  IsOptional,
  IsNumber,
  IsDateString,
  IsEnum,
} from "class-validator";
import { budget_period } from "@prisma/client";

export class CreateBudgetDto {
  @IsString()
  name!: string;

  @IsNumber()
  amount!: number;

  @IsEnum(budget_period)
  period?: budget_period = budget_period.MONTHLY;

  @IsDateString()
  start_date!: string;

  @IsOptional()
  @IsDateString()
  end_date?: string;

  @IsOptional()
  @IsNumber()
  alert_at?: number;

  @IsString()
  category_id!: string;
}
