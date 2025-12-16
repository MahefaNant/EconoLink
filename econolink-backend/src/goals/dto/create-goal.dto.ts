import {
  IsString,
  IsOptional,
  IsNumber,
  IsBoolean,
  IsDateString,
  MaxLength,
} from "class-validator";

export class CreateGoalDto {
  @IsString()
  @MaxLength(100)
  name!: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsNumber()
  target!: number;

  @IsOptional()
  @IsNumber()
  current?: number;

  @IsOptional()
  @IsDateString()
  deadline?: string;

  @IsOptional()
  @IsString()
  color?: string;

  @IsOptional()
  @IsString()
  icon?: string;

  @IsOptional()
  @IsBoolean()
  auto_transfer?: boolean;

  @IsOptional()
  @IsString()
  transfer_account_id?: string;
}
