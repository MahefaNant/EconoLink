/* eslint-disable @typescript-eslint/no-unsafe-return */
import { Controller, Get, Param, UseGuards } from "@nestjs/common";
import { CategorieService } from "./categorie.service";
import { JwtAuthGuard } from "src/auth/jwt/jwt-auth.guard";

@Controller("categorie")
export class CategorieController {
  constructor(private readonly categorieService: CategorieService) {}

  @UseGuards(JwtAuthGuard)
  @Get("all")
  async getAll(@Param("id") id: string) {
    return this.categorieService.getAll(id);
  }
}
