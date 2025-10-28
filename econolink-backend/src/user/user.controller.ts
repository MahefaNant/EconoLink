import { Body, Controller, Get, Param, Patch } from "@nestjs/common";
import { UserService } from "./user.service";

@Controller("user")
export class UserController {
  constructor(private readonly userService: UserService) {}

  // GET /user/:id
  @Get(":id")
  async getUser(@Param("id") id: string) {
    return this.userService.findById(id);
  }

  // PATCH /user/:id
  @Patch(":id")
  async updateUser(
    @Param("id") id: string,
    @Body() body: { updates: Record<string, any> },
  ) {
    return this.userService.updateFields(id, body.updates || {});
  }
}
