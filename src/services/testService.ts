import testRepository from "../repositories/testRepository.js";
import {Test} from '../repositories/testRepository.js'

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
  return testRepository.getSingle(parseInt(id))
}

async function addTest(test: Test){
  return testRepository.addTest(test)
}

export default {
  find,
  getSingle,
  addTest
};
