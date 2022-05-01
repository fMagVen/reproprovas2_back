import { Request, Response } from "express";
import testService from "../services/testService.js";
import {CreateTestData} from '../services/testService.js'

async function find(req: Request, res: Response) {
  const { groupBy, name } = req.query as { groupBy: string, name: string };

  if (groupBy !== "disciplines" && groupBy !== "teachers") {
    return res.sendStatus(400);
  }

  const tests = await testService.find({ groupBy, name });
  res.send({ tests });
}

async function getSingle(req: Request, res: Response){
  const { id } = req.params
  if(isNaN(parseInt(id))) return res.sendStatus(400)

  const test = await testService.getSingle(id)
  if(!test) return res.sendStatus(404)
  res.send(test)
}

async function addTest(req: Request, res:Response){
  const { name, pdfUrl, categoryId, teacherDisciplineId } = req.body as CreateTestData
  const test = await testService.addTest({name, pdfUrl, categoryId, teacherDisciplineId})
  res.sendStatus(201)
}

export default {
  find,
  getSingle,
  addTest
};
