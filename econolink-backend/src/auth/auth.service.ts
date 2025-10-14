import { Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { PrismaService } from "src/prisma/prisma.service";
import { SignUpDto } from "./dto/sign-up.dto";
import bcrypt from "node_modules/bcryptjs";
import { SignInDto } from "./dto/sign-in.dto";

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

    const payload = { sub: user.id, email: user.email };
    const token = this.jwtService.signAsync(payload);

    return {
      user: { id: user.id, email: user.email, name: user.name },
      access_token: token,
    };
  }

  async signIn(dto: SignInDto) {
    const user = await this.prisma.users.findUnique({
      where: { email: dto.email },
    });

    if (!user) throw new UnauthorizedException("No account with this email");

    const passwordMatch = await bcrypt.compare(dto.password, user.password);
    if (!passwordMatch) throw new UnauthorizedException("Invalid credentials");

    const payload = { sub: user.id, email: user.email };
    const token = await this.jwtService.signAsync(payload);
    return {
      user: { id: user.id, email: user.email, name: user.name },
      access_token: token,
    };
  }
}
