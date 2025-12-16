import { IsOptional, IsString } from "class-validator";
import type { Ttransaction_type } from "../interface/ICategorie";

export class CategorieDto {
  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsString()
  icon?: string;

  @IsOptional()
  @IsString()
  color?: string;

  @IsOptional()
  type!: Ttransaction_type;
}
