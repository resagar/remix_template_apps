import { PrismaClient } from "@prisma/client";
import { remember } from "@epic-web/remember";

export const prisma = remember("prisma", () => {
  const client = new PrismaClient();
  client.$connect();
  return client;
});
