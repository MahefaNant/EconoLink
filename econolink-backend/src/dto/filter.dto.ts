import { IsOptional, IsString, IsNumberString, IsIn } from "class-validator";

export class FilterGoalsDto {
  @IsOptional()
  @IsNumberString()
  page?: string;

  @IsOptional()
  @IsNumberString()
  limit?: string;

  @IsOptional()
  @IsString()
  search?: string;

  @IsOptional()
  @IsString()
  orderBy?: string; // created_at, deadline, name...

  @IsOptional()
  @IsIn(["asc", "desc"])
  order?: "asc" | "desc";
}
