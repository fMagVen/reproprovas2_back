import { Router } from "express";
import testController from "../controllers/testController.js";
import { ensureAuthenticatedMiddleware } from "../middlewares/ensureAuthenticatedMiddleware.js";

const testRouter = Router();

testRouter.get("/tests",/* ensureAuthenticatedMiddleware,*/ testController.find);
testRouter.get("/tests/:id",/* ensureAuthenticatedMiddleware,*/ testController.getSingle);
testRouter.post("/tests",/* ensureAuthenticatedMiddleware,*/ testController.addTest);
export default testRouter;
