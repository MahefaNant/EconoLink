import { IsOptional, IsString } from "class-validator";
import { CategorieDto } from "./categorie.dto";

export class CategorieUpdateDto extends CategorieDto {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  user_id?: string;
}
