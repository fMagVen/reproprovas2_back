import {faker} from '@faker-js/faker'

export function createUser(){
	const email = faker.internet.email()
	const password = faker.random.word()
	const user = {
		email,
		password
	}
	return user
}