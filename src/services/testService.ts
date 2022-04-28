import testRepository from "../repositories/testRepository.js";

interface Filter {
  groupBy: "disciplines" | "teachers",
  name?: string
}

async function find(filter: Filter) {
  if (filter.groupBy === "disciplines") {
    return testRepository.getTestsByDiscipline(filter.name);
  } else if (filter.groupBy === "teachers") {
    return testRepository.getTestsByTeachers();
  }
}

export default {
  find,
};
