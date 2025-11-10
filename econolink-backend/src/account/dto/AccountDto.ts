import { IsNotEmpty, IsOptional, IsString } from "class-validator";
import type { TAccount } from "../interface/IAccount";

export class AccountDto {
  @IsOptional()
  @IsString()
  icon?: string;

  @IsOptional()
  @IsString()
  color?: string;

  @IsNotEmpty({ message: "Account type is required" })
  type!: TAccount;

  @IsNotEmpty({ message: "User ID is required" })
  @IsString()
  user_id!: string;

  @IsNotEmpty({ message: "Name is required" })
  @IsString()
  name!: string;
}
