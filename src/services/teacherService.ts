import teacherRepository from "../repositories/teacherRepository.js";

async function findMany(id: number) {
  return teacherRepository.findTeachersByDiscipline(id);
}

export default {
  findMany,
};