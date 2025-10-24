import { IsOptional, IsString } from "class-validator";
import type { TAccount } from "../interface/IAccount";

export class AccountDto {
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
  type!: TAccount;
}
