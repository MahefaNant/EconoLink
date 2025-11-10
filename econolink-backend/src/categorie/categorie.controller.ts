import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  UseGuards,
} from "@nestjs/common";
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
  @Patch(":id")
  async update(@Param("id") id: string, @Body() dto: CategorieUpdateDto) {
    return await this.categorieService.update(id, dto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(":id")
  async delete(@Query("id") id: string) {
    return await this.categorieService.delete(id);
  }
}
