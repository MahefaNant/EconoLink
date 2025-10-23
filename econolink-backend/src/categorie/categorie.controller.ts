/* eslint-disable @typescript-eslint/no-unsafe-return */
import { Body, Controller, Get, Post, Query, UseGuards } from "@nestjs/common";
import { CategorieService } from "./categorie.service";
import { JwtAuthGuard } from "src/auth/jwt/jwt-auth.guard";
import { CategorieUpdateDto } from "./dto/categorieUpdate.dto";
import { CategorieAddDto } from "./dto/categorieAdd.dto";

@Controller("categorie")
export class CategorieController {
  constructor(private readonly categorieService: CategorieService) {}

  @UseGuards(JwtAuthGuard)
  @Get("all")
  async getAll(@Query("user_id") user_id: string) {
    return await this.categorieService.getAll(user_id);
  }

  @UseGuards(JwtAuthGuard)
  @Post("create")
  async create(@Body() dto: CategorieAddDto) {
    return await this.categorieService.create(dto);
  }

  @UseGuards(JwtAuthGuard)
  @Post("update")
  async update(@Body() dto: CategorieUpdateDto) {
    return await this.categorieService.update(dto);
  }

  @UseGuards(JwtAuthGuard)
  @Post("delete")
  async delete(@Query("id") id: string) {
    return await this.categorieService.delete(id);
  }
}
