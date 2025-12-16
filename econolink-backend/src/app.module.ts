import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { AuthModule } from "./auth/auth.module";
import { PrismaService } from "./prisma/prisma.service";
import { PrismaModule } from "./prisma/prisma.module";
import { CategorieModule } from "./categorie/categorie.module";
import { AccountModule } from "./account/account.module";
import { UserModule } from "./user/user.module";
import { TransactionModule } from "./transaction/transaction.module";
import { BudgetsModule } from "./budgets/budgets.module";
import { GoalsModule } from "./goals/goals.module";
import { RemindersModule } from "./reminders/reminders.module";

@Module({
  imports: [
    AuthModule,
    PrismaModule,
    CategorieModule,
    AccountModule,
    UserModule,
    TransactionModule,
    BudgetsModule,
    GoalsModule,
    RemindersModule,
  ],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
