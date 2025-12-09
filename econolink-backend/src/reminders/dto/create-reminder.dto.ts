import {
  IsBoolean,
  IsDateString,
  IsOptional,
  IsString,
  MaxLength,
} from "class-validator";

export class CreateReminderDto {
  @IsString()
  @MaxLength(200)
  title!: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsDateString()
  due_date!: string;

  @IsOptional()
  @IsBoolean()
  is_recurring?: boolean;

  @IsOptional()
  recurring_rule?: any;
}
