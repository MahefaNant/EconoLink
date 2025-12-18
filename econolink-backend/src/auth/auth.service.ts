import { Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { SignUpDto } from "./dto/sign-up.dto";
import { SignInDto } from "./dto/sign-in.dto";
import { Response } from "express";
import { PrismaService } from "src/prisma/prisma.service";
import * as bcrypt from "bcryptjs";

@Injectable()
export class AuthService {
  getHello(): string {
    throw new Error("Method not implemented.");
  }
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) {}

  async signUp(dto: SignUpDto) {
    const existing = await this.prisma.users.findUnique({
      where: { email: dto.email },
    });
    if (existing) throw new UnauthorizedException("Email already registered");

    const hashedPassword = await bcrypt.hash(dto.password, 12);
    const user = await this.prisma.users.create({
      data: { ...dto, password: hashedPassword },
    });

    const payload = { sub: user.id, email: user.email, name: user.name };
    const token = await this.jwtService.signAsync(payload);

    return {
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        avatar: user.avatar,
        currency: user.currency,
      },
      access_token: token,
    };
  }

  async signIn(dto: SignInDto) {
    const user = await this.prisma.users.findUnique({
      where: { email: dto.email },
    });

    if (!user) throw new UnauthorizedException("No account with this email");

    if (!dto.password || !user.password)
      throw new UnauthorizedException("Invalid credentials");

    const passwordMatch = await bcrypt.compare(dto.password, user.password);
    if (!passwordMatch) throw new UnauthorizedException("Invalid credentials");

    const payload = { sub: user.id, email: user.email, name: user.name };
    const token = await this.jwtService.signAsync(payload);
    return {
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        avatar: user.avatar,
        currency: user.currency,
      },
      access_token: token,
    };
  }

  async getUserById(id: string) {
    const user = await this.prisma.users.findUnique({
      where: { id: id },
    });

    return user;
  }

  createCookies({
    res,
    access_token,
  }: {
    res: Response<any, Record<string, any>>;
    access_token: string;
  }) {
    res.cookie("access_token", access_token, {
      httpOnly: true,
      secure: process.env.COOKIE_SECURE === "true", // prod = true, local = false
      sameSite: process.env.COOKIE_SECURE === "true" ? "none" : "lax",
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7days
      path: "/",
    });
  }
}
