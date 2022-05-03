import app from '../src/app'
import { prisma } from '../src/dbSetup'
import supertest from 'supertest'
import {createUser} from './factories/userFactory'
import {createTest} from './factories/testFactory'
 
let globalUser: any
let globalToken: any

describe("POST /sign-up", () => {

	it("given a wrong schema should return 422", async ()=>{
		const user = {
			name: "asd",
			password: "dsa"
		}
		const response = await supertest(app).post("/sign-up").send(user)
		expect(response.status).toBe(422)
	})

	it("given a valid schema and new user should return 201", async ()=>{
		const user = createUser()
		globalUser = user
		const response = await supertest(app).post("/sign-up").send(user)
		expect(response.status).toBe(201)
	})

	it("given an already existing user, attempt to create same user should return 409", async ()=>{
		const response = await supertest(app).post("sign-up").send(globalUser)
		expect(response.status).toBe(404)
		expect({name: 'notFoundError', message: 'Email must be unique'})
	})

	afterAll(async() => {
		await prisma.$disconnect();
   });
})


describe("POST /sign-in", () => {

	it("given a wrong schema should return 422", async ()=>{
		const user = {
			name: "asd",
			password: "dsa"
		}
		const response = await supertest(app).post("/sign-in").send(user)
		expect(response.status).toBe(422)
	})

	it("given an unregistered email should return 401", async () => {
		const user = createUser()
		const response = await supertest(app).post("/sign-in").send(user)
		expect(response.status).toBe(401)
		expect({name: 'unauthorizedError', message: 'Invalid credentials'})
	})

	it("given right email but wrong password should return 401", async()=>{
		const user = {...globalUser, password: 'wrong'}
		const response = await supertest(app).post("/sign-in").send(user)
		expect(response.status).toBe(401)
		expect({name: 'unauthorizedError', message: 'Invalid credentials'})
	})

	it("given right credentials should return token and 200", async()=>{
		const response = await supertest(app).post("/sign-in").send(globalUser)
		globalToken = response.body.token
		expect(response.status).toBe(200)
		expect(globalToken).toBeTruthy()
	})
	afterAll(async() => {
		await prisma.$disconnect();
   });

})


describe("GET /tests", ()=>{
	
	it("given no token request should be rejected, error 401",async()=>{
		const response = await supertest(app).get("/tests")
		expect(response.status).toBe(401)
		expect({name: 'unauthorizedError', message: 'Missing authorization header'})
	})

	it("given wrong token request should be rejected, error 401",async()=>{
		const response = await supertest(app).get("/tests").set('Authorization', `Bearer asd`)
		expect(response.status).toBe(401)
		expect({name: 'unauthorizedError', message: 'Invalid token'})
	})

	it("given right token but no 'groupBy' query or 'groupBy' with values different from 'disciplines' or 'teachers' request should be rejected, error 400",async()=>{
		const response = await supertest(app).get("/tests").set('Authorization', `Bearer ${globalToken}`)
		expect(response.status).toBe(400)
		expect({name: 'unauthorizedError', message: 'Invalid credentials'})
	})

	it("given the right token and query request should return all tests", async()=>{
		const response = await supertest(app).get("/tests?groupBy=disciplines").set("Authorization", `Bearer ${globalToken}`)
		expect(response.status).toBe(200)
		expect(response.body.tests.length).toBeGreaterThan(0)
	})
	
	it("given an invalid id parameter, request should return error 404", async () => {
		const response = await supertest(app).get("/tests/1000").set("Authorization", `Bearer ${globalToken}`)
		expect(response.status).toBe(404)
		expect({name: 'notFoundError', message: 'Test not found'})	
	})

	it("given a valid id parameter, request should return a single test",async () => {
		const response = await supertest(app).get("/tests/5").set("Authorization", `Bearer ${globalToken}`)
		expect(response.status).toBe(200)
		expect(response.body.id).toBeTruthy()
	})
	afterAll(async() => {
		await prisma.$disconnect();
   });

})

describe("POST /tests", ()=>{

	it("given no token request should be rejected, error 401",async()=>{
		const response = await supertest(app).post("/tests")
		expect(response.status).toBe(401)
		expect({name: 'unauthorizedError', message: 'Missing authorization header'})
	})

	it("given wrong token request should be rejected, error 401",async()=>{
		const response = await supertest(app).post("/tests").set('Authorization', `Bearer asd`)
		expect(response.status).toBe(401)
		expect({name: 'unauthorizedError', message: 'Invalid token'})
	})

	it("given right token but wrong schema request should be rejected, error 422",async()=>{
		const test = {
			name: 'wrong',
			site: 'non existant',
			category: 0,
			teacherDisciplineId: 0
		}
		const response = await supertest(app).post("/tests").send(test).set('Authorization', `Bearer ${globalToken}`)
		expect(response.status).toBe(422)
	})

	it("given right token right schema request should return 201",async()=>{
		const test = await createTest()
		const response = await supertest(app).post("/tests").send(test).set('Authorization', `Bearer ${globalToken}`)
		expect(response.status).toBe(201)
	})
	afterAll(async() => {
		await prisma.$disconnect();
   });

})

describe("GET /categories", ()=>{

	it("given no token request should be rejected, error 401",async()=>{
		const response = await supertest(app).get("/categories")
		expect(response.status).toBe(401)
		expect({name: 'unauthorizedError', message: 'Missing authorization header'})
	})
	
	it("given wrong token request should be rejected, error 401",async()=>{
		const response = await supertest(app).get("/categories").set('Authorization', `Bearer asd`)
		expect(response.status).toBe(401)
		expect({name: 'unauthorizedError', message: 'Invalid token'})
	})
	
	it("given right token request should return all categories, status 200",async()=>{
		const response = await supertest(app).get("/categories").set('Authorization', `Bearer ${globalToken}`)
		expect(response.status).toBe(200)
		expect(response.body.categories.length).toBeGreaterThan(0)
	})
	afterAll(async() => {
		await prisma.$disconnect();
   });

})

describe("GET /disciplines", ()=>{

	it("given no token request should be rejected, error 401",async()=>{
		const response = await supertest(app).get("/disciplines")
		expect(response.status).toBe(401)
		expect({name: 'unauthorizedError', message: 'Missing authorization heander'})
	})

	it("given wrong token request should be rejected, error 401",async()=>{
		const response = await supertest(app).get("/disciplines").set('Authorization', `Bearer asd`)
		expect(response.status).toBe(401)
		expect({name: 'unauthorizedError', message: 'Invalid token'})
	})

	it("given right token request should return all disciplines, status 200",async()=>{
		const response = await supertest(app).get("/disciplines").set('Authorization', `Bearer ${globalToken}`)
		expect(response.status).toBe(200)
		expect(response.body.disciplines.length).toBeGreaterThan(0)
	})
	afterAll(async() => {
		await prisma.$disconnect();
   });

})

describe("GET /teachers:id", ()=>{

	it("given no token request should be rejected, error 401",async()=>{
		const response = await supertest(app).get("/teachers/1")
		expect(response.status).toBe(401)
		expect({name: 'unauthorizedError', message: 'Missing authorization heander'})
	})

	it("given wrong token request should be rejected, error 401",async()=>{
		const response = await supertest(app).get("/teachers/1").set('Authorization', `Bearer asd`)
		expect(response.status).toBe(401)
		expect({name: 'unauthorizedError', message: 'Invalid token'})
	})

	it("given right token but id params is NaN request should be rejected, error 400",async()=>{
		const response = await supertest(app).get("/teachers/bananinha").set('Authorization', `Bearer ${globalToken}`)
		expect(response.status).toBe(400)
	})

	it("given right token but id params doesnt exist request should return error 404",async()=>{
		const response = await supertest(app).get("/teachers/1000").set('Authorization', `Bearer ${globalToken}`)
		expect(response.status).toBe(404)
		expect({name: 'notFoundError', message: 'Teachers not found for given discipline'})
	})

	it("given right token and existing id params request should return teachers of given discipline, status 200",async()=>{
		const response = await supertest(app).get("/teachers/1").set('Authorization', `Bearer ${globalToken}`)
		expect(response.status).toBe(200)
		expect(response.body.teachers.length).toBeGreaterThan(0)
	})
	afterAll(async() => {
		await prisma.$disconnect();
   });
})