import { prisma } from "../src/dbSetup.js";

async function main(){
	await prisma.test.create({
		data: {
			name: 'prova de prisma',
			pdfUrl: 'rarararar',
			categoryId: 2,
			teacherDisciplineId: 10
		}
	})
}

main().catch(e=>{
	console.log(e)
	process.exit(1)
}).finally(async () => {
    await prisma.$disconnect();
  });