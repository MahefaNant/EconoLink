import { IsNotEmpty, IsOptional, IsString } from "class-validator";
import { AccountDto } from "./Account.dto";

export class AccountUpdateDto extends AccountDto {
  @IsNotEmpty()
  id!: string;

  @IsOptional()
  @IsString()
  name?: string;
}
