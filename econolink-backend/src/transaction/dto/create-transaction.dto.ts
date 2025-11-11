import {
  IsString,
  IsOptional,
  IsNumber,
  IsEnum,
  IsBoolean,
  IsDateString,
  IsObject,
} from "class-validator";
import { transaction_type } from "@prisma/client";

export class CreateTransactionDto {
  @IsNumber()
  amount!: number;

  @IsString()
  description!: string;

  @IsOptional()
  @IsDateString()
  date?: string;

  @IsEnum(transaction_type)
  type!: transaction_type;

  @IsOptional()
  @IsString()
  notes?: string;

  @IsOptional()
  @IsString()
  location?: string;

  @IsOptional()
  @IsString()
  receipt_image?: string;

  @IsOptional()
  @IsBoolean()
  is_recurring?: boolean;

  @IsOptional()
  @IsString()
  recurring_id?: string;

  @IsOptional()
  @IsObject()
  recurring_rule?: any;

  @IsString()
  account_id!: string;

  @IsOptional()
  @IsString()
  to_account_id?: string;

  @IsOptional()
  @IsString()
  category_id?: string;

  // For offline sync
  @IsOptional()
  @IsString()
  local_id?: string;

  @IsOptional()
  @IsBoolean()
  is_synced?: boolean;
}
