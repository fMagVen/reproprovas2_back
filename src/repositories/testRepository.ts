import { prisma } from "../dbSetup.js";

async function getTestsByDiscipline(queriedName? :string) {
  return prisma.term.findMany({
    include: {
      disciplines: {
        where:{
          name: {
            startsWith: queriedName
          }
        },
        include: {
          teacherDisciplines: {
            include: {
              teacher: true,
              tests: {
                include: {
                  category: true,
                },
              },
            },
          },
        },
      },
    },
  });
}

async function getTestsByTeachers(queriedName?: string) {
  return prisma.teacher.findMany({
    where:{
      name:{
        startsWith: queriedName
      }
    },
    include:{
      teacherDisciplines:{
        include:{
          discipline:{
            include:{
              term: true
            }
          },
          tests:{
            include:{
              category: true
            }
          }
        }
      }
    }
  });
}

export default {
  getTestsByDiscipline,
  getTestsByTeachers,
};
