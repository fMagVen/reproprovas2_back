import { Request, Response } from "express";
import teacherService from "../services/teacherService.js";

async function findMany(req: Request, res: Response) {
  const {id} = req.params
  if(isNaN(parseInt(id))) return res.sendStatus(400)

  const teachers = await teacherService.findMany(parseInt(id));
  res.send({ teachers });
}

export default {
  findMany,
};