import { prisma } from "../dbSetup.js";
import { CreateTestData } from '../services/testService.js'

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
  return prisma.teacherDiscipline.findMany({
    include: {
      teacher: true,
      discipline: true,
      tests: {
        include: {
          category: true,
        },
      },
    },
  });
}

async function checkTestExistence(queriedId: number){
  return prisma.test.findUnique({
    where:{
      id: queriedId
    }
  })
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

async function addTest(testData: CreateTestData){
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
  checkTestExistence,
  getSingle,
  addTest,
};
