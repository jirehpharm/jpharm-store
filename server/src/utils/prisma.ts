import { PrismaClient } from "@prisma/client";

export const prisma: PrismaClient = new PrismaClient();

prisma.$use(async (params: any, next: any) => {
  const result = await next(params);
  return result;
});

export default prisma;
