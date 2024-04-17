import { Router } from "express";
import { notifyController } from "./notifcationDependencies";

export const notificationRouter = Router();

notificationRouter.post("/", notifyController.execute.bind(notifyController));
