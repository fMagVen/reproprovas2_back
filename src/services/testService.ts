import { Test } from "@prisma/client";
import testRepository from "../repositories/testRepository.js";
import { notFoundError } from "../utils/errorUtils.js";

export type CreateTestData = Omit<Test, "id" | "views">;

interface Filter {
  groupBy: "disciplines" | "teachers",
  name?: string
}

async function find(filter: Filter) {
  if (filter.groupBy === "disciplines") {
    return testRepository.getTestsByDiscipline(filter.name);
  } else if (filter.groupBy === "teachers") {
    return testRepository.getTestsByTeachers(filter.name);
  }
}

async function getSingle(id: string){
  const test = await testRepository.checkTestExistence(parseInt(id))
  if(!test) throw notFoundError("Test not found")
  return testRepository.getSingle(parseInt(id))
}

async function addTest(test: CreateTestData){
  return testRepository.addTest(test)
}

export default {
  find,
  getSingle,
  addTest
};
