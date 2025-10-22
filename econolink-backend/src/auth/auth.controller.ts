import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Req,
  Res,
  UseGuards,
} from "@nestjs/common";
import { AuthService } from "./auth.service";
import { SignUpDto } from "./dto/sign-up.dto";
import { SignInDto } from "./dto/sign-in.dto";
import { JwtAuthGuard } from "./jwt/jwt-auth.guard";
import type { Request, Response } from "express";

@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post("signup")
  async signUp(
    @Body() dto: SignUpDto,
    @Res({ passthrough: true }) res: Response,
  ) {
    const { user, access_token } = await this.authService.signUp(dto);

    this.authService.createCookies({ res, access_token });

    return { user };
  }

  @Post("signin")
  async signIn(
    @Body() dto: SignInDto,
    @Res({ passthrough: true }) res: Response,
  ) {
    const { user, access_token } = await this.authService.signIn(dto);

    this.authService.createCookies({ res, access_token });

    return { user };
  }

  @Post("logout")
  @HttpCode(HttpStatus.OK)
  logout(@Res({ passthrough: true }) res: Response) {
    res.clearCookie("access_token", {
      httpOnly: true,
      secure: false,
      sameSite: "lax",
    });

    return { message: "Logged out successfully" };
  }

  @UseGuards(JwtAuthGuard)
  @Get("check")
  check() {
    return { status: "ok" };
  }

  @Get("me")
  @UseGuards(JwtAuthGuard)
  getMe(@Req() req: Request) {
    return { user: req.user };
  }
}
