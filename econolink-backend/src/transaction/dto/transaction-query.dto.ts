import { Type } from "class-transformer";
import {
  IsOptional,
  IsNumber,
  Min,
  IsString,
  IsIn,
  IsDateString,
} from "class-validator";

export class TransactionQueryDto {
  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  @Min(1)
  page?: number = 1;

  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  @Min(1)
  @Min(1)
  limit?: number = 10;

  @IsOptional()
  @IsString()
  search?: string;

  @IsOptional()
  @IsString()
  @IsIn(["ALL", "INCOME", "EXPENSE", "TRANSFER"])
  type?: string = "ALL";

  @IsOptional()
  @IsDateString()
  startDate?: string;

  @IsOptional()
  @IsDateString()
  endDate?: string;

  @IsOptional()
  @IsString()
  @IsIn(["date", "amount", "description", "created_at"])
  sortBy?: string = "date";

  @IsOptional()
  @IsString()
  @IsIn(["asc", "desc"])
  sortOrder?: "asc" | "desc" = "desc";
}
