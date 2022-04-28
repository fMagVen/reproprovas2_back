import { prisma } from "../dbSetup.js";

async function findMany() {
  return prisma.category.findMany();
}

export default {
  findMany,
};
