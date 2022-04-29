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

async function getSingle(queriedId: number){
  return prisma.test.update({
    where:{
      id: queriedId,
    },
    data:{
      views:{
        increment: 1
      }
    },
    include:{
      category: true,
      teacherDiscipline:{
        include:{
          teacher: true,
          discipline:{
            include:{
              term: true
            }
          }
        }
      }
    }
  })
}

export interface Test {
  name: string,
  pdfUrl: string,
  categoryId: number,
  teacherDisciplineId: number
}

async function addTest(testData: Test){
  return prisma.test.create({
    data:{
      name: testData.name,
      pdfUrl: testData.pdfUrl,
      categoryId: testData.categoryId,
      teacherDisciplineId: testData.teacherDisciplineId
    }
  })
}

export default {
  getTestsByDiscipline,
  getTestsByTeachers,
  getSingle,
  addTest,
};
