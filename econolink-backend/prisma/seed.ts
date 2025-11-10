/* eslint-disable @typescript-eslint/no-misused-promises */

import { PrismaClient } from "@prisma/client";
import { categorieDefaultDatas } from "../src/categorie/lib/categorieData";

const prisma = new PrismaClient();

async function main() {
  for (const cat of categorieDefaultDatas) {
    await prisma.categories.upsert({
      where: { name: cat.name }, // prevent duplicates
      update: {},
      create: { ...cat, user_id: null },
    });
  }

  console.log("Default categories inserted!");
}

main()
  .catch((e) => console.error(e))
  .finally(async () => await prisma.$disconnect());
