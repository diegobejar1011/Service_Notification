import { Events } from "../entities/Events";
import { Notification } from "../../../../notification/domain/entites/Notification";

export interface SocketRepository {
    connect(): Promise<any>;
    notify(event: Events, notification: Notification): Promise<void>;
}