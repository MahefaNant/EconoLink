import { IsNotEmpty } from "class-validator";
import { Ttransaction_type } from "../interface/ICategorie";

export class CategorieDto {
  @IsNotEmpty({ message: "User ID is required" })
  user_id!: string;

  @IsNotEmpty({ message: "Cateforie name is required" })
  name!: string;

  description?: string;

  icon?: string;

  color?: string;
  type!: Ttransaction_type;
}
