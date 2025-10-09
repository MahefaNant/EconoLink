import { IsEmail, IsNotEmpty } from "class-validator";

export class SignInDto {
  @IsEmail({}, { message: "Invalid email" })
  @IsNotEmpty({ message: "Email is required" })
  email!: string;

  @IsNotEmpty()
  password!: string;
}
