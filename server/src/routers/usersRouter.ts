import { Router, Request, Response } from "express";
import express from "express";
import { usersController } from "../controllers/usersController";

const usersRouter = express.Router();
usersRouter.get("/users", usersController);
export { usersRouter };
