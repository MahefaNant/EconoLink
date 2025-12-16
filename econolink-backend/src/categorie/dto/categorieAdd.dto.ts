import { IsNotEmpty } from "class-validator";
import { CategorieDto } from "./categorie.dto";

export class CategorieAddDto extends CategorieDto {
  @IsNotEmpty({ message: "Categorie name is required" })
  name!: string;

  @IsNotEmpty({ message: "User ID is required" })
  user_id!: string;
}
