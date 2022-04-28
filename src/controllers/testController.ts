import { Request, Response } from "express";
import testService from "../services/testService.js";

async function find(req: Request, res: Response) {
  const { groupBy, name } = req.query as { groupBy: string, name: string };
  console.log(groupBy, name)

  if (groupBy !== "disciplines" && groupBy !== "teachers") {
    return res.sendStatus(400);
  }

  const tests = await testService.find({ groupBy, name });
  res.send({ tests });
}

export default {
  find,
};
