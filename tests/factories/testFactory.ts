import {faker} from '@faker-js/faker'

export async function createTest(){
	const test = {
		name: faker.lorem.lines(3),
		pdfUrl: faker.internet.url(),
		categoryId: faker.datatype.number({min: 1, max: 5}),
		teacherDisciplineId: faker.datatype.number({min: 1, max: 7})
	}
	return test
}