/* eslint-disable @typescript-eslint/no-floating-promises */
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { ValidationPipe } from "@nestjs/common";
import cookieParser from "cookie-parser";
import {
  CorsOptions,
  CorsOptionsDelegate,
} from "@nestjs/common/interfaces/external/cors-options.interface";
import { Request } from "express";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(cookieParser());

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  const allowedOrigins =
    process.env.CORS_ORIGIN?.split(",").map((o) => o.trim()) ?? [];

  const corsOptions: CorsOptionsDelegate<Request> = (req, callback) => {
    const origin = req.get("Origin");

    const options: CorsOptions = {
      origin: false,
      methods: ["GET", "PATCH", "POST", "PUT", "DELETE", "OPTIONS"],
      allowedHeaders: ["Content-Type", "Authorization", "Cookie", "Set-Cookie"],
      credentials: true,
    };

    if (!origin) {
      options.origin = true;
      return callback(null, options);
    }

    if (allowedOrigins.includes(origin)) {
      options.origin = true;
      return callback(null, options);
    }

    return callback(new Error(`CORS blocked for origin: ${origin}`), options);
  };

  app.enableCors(corsOptions);

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
