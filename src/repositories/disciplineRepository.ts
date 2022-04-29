import { prisma } from "../dbSetup.js";

async function findMany() {
  return prisma.discipline.findMany();
}

export default {
  findMany,
};