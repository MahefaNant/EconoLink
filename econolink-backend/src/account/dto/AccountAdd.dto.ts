import { IsNotEmpty } from "class-validator";
import { AccountDto } from "./Account.dto";

export class AccountAddDto extends AccountDto {
  @IsNotEmpty({ message: "User ID is required" })
  user_id!: string;

  @IsNotEmpty({ message: "Categorie name is required" })
  name!: string;
}
