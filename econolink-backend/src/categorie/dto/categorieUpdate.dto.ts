import { IsNotEmpty, IsOptional, IsString } from "class-validator";
import { CategorieDto } from "./categorie.dto";

export class CategorieUpdateDto extends CategorieDto {
  @IsNotEmpty()
  id!: string;

  @IsOptional()
  @IsString()
  name?: string;
}
