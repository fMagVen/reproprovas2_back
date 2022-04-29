import { prisma } from "../dbSetup.js";

async function findTeachersByDiscipline(id: number) {
  return prisma.teacherDiscipline.findMany({
	where:{
		disciplineId: id
	},
	include:{
		teacher: true
	}
  });
}

export default {
  findTeachersByDiscipline,
};