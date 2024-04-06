import { notificationRouter } from "../notification/infraestructure/notifcationRoutes";
import { Router } from "express";

export const indexRouter = Router();

indexRouter.use('/notification', notificationRouter); 