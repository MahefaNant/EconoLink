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
  notes?: string | null; // Accepter null

  @IsOptional()
  @IsString()
  location?: string | null;

  @IsOptional()
  @IsString()
  receipt_image?: string | null;

  @IsOptional()
  @IsBoolean()
  is_recurring?: boolean;

  @IsOptional()
  @IsString()
  recurring_id?: string | null;

  @IsOptional()
  @IsObject()
  recurring_rule?: any;

  @IsOptional()
  @IsString()
  account_id?: string;

  @IsOptional()
  @IsString()
  to_account_id?: string | null;

  @IsOptional()
  @IsString()
  category_id?: string | null;

  // For offline sync updates
  @IsOptional()
  @IsString()
  local_id?: string | null;

  @IsOptional()
  @IsBoolean()
  is_synced?: boolean;
}
