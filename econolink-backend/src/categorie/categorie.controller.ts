/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Req,
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
  async getAll(@Req() req: any) {
    return await this.categorieService.getAll(req.user.id);
  }

  @UseGuards(JwtAuthGuard)
  @Post("create")
  async create(@Body() dto: CategorieAddDto, @Req() req: any) {
    return await this.categorieService.create(dto, req.user.id);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(":id")
  async update(
    @Param("id") id: string,
    @Body() dto: CategorieUpdateDto,
    @Req() req: any,
  ) {
    return await this.categorieService.update(id, req.user.id, dto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(":id")
  async delete(@Param("id") id: string, @Req() req: any) {
    return await this.categorieService.delete(id, req.user.id);
  }
}
