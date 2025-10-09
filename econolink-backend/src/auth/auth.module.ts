import { Module } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthController } from "./auth.controller";
import { PassportModule } from "@nestjs/passport";
import { JwtModule } from "@nestjs/jwt";
import { PrismaModule } from "src/prisma/prisma.module";
import { PrismaService } from "src/prisma/prisma.service";
import { JwtStrategy } from "./jwt/jwt.strategy";

@Module({
  providers: [AuthService, JwtStrategy, PrismaService],
  controllers: [AuthController],
  imports: [
    PassportModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET || "defaultWrongFakeSecret",
      signOptions: { expiresIn: "1h" },
    }),
    PrismaModule,
  ],
  // exports: [AuthService],
})
export class AuthModule {}
