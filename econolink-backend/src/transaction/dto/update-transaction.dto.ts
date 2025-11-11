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

export class UpdateTransactionDto {
  @IsOptional()
  @IsNumber()
  amount?: number;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsDateString()
  date?: string;

  @IsOptional()
  @IsEnum(transaction_type)
  type?: transaction_type;

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

  @IsOptional()
  @IsString()
  account_id?: string;

  @IsOptional()
  @IsString()
  to_account_id?: string;

  @IsOptional()
  @IsString()
  category_id?: string;

  // For offline sync updates
  @IsOptional()
  @IsString()
  local_id?: string;

  @IsOptional()
  @IsBoolean()
  is_synced?: boolean;
}
