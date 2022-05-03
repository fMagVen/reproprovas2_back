import teacherRepository from "../repositories/teacherRepository.js";
import { notFoundError } from "../utils/errorUtils.js";

async function findMany(id: number) {
  const teachers = await teacherRepository.findTeachersByDiscipline(id);
  if(teachers.length < 1) throw notFoundError("Teachers not found for given discipline")
  return teachers
}

export default {
  findMany,
};