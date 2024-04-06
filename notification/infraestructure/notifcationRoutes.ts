import { Router } from "express";
import { notifyController } from "./Notifcationdependencies";

export const notificationRouter = Router();

notificationRouter.post("/", notifyController.execute.bind(notifyController));
