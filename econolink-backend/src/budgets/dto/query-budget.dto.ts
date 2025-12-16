import { budget_period } from "@prisma/client";
import { IsOptional, IsNumber, IsString, IsEnum } from "class-validator";
import { Type } from "class-transformer";

export enum BudgetStatusEnum {
  NORMAL = "NORMAL",
  ALERT = "ALERT",
  EXCEEDED = "EXCEEDED",
}

export enum BudgetSortEnum {
  created_at = "created_at",
  percentage_used = "percentage_used",
  name = "name",
}

export enum OrderEnum {
  asc = "asc",
  desc = "desc",
}

export class BudgetQueryDto {
  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  page: number = 1;

  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  limit: number = 10;

  @IsOptional()
  @IsString()
  search?: string;

  @IsOptional()
  @IsEnum(BudgetStatusEnum)
  status?: BudgetStatusEnum;

  @IsOptional()
  @IsEnum(budget_period)
  period?: budget_period;

  @IsOptional()
  @IsEnum(BudgetSortEnum)
  orderBy?: BudgetSortEnum = BudgetSortEnum.created_at;

  @IsOptional()
  @IsEnum(OrderEnum)
  order?: OrderEnum = OrderEnum.desc;
}
