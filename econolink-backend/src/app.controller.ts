import { Controller, Get, Header } from "@nestjs/common";
import { AppService } from "./app.service";

@Controller("app")
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get("health-check")
  @Header("Cache-Control", "no-cache, no-store, must-revalidate")
  healthCheck() {
    return {
      status: "ok",
      timestamp: new Date().toISOString(),
      service: "econolink-back-end",
    };
  }
}
