import { SocketRepository } from "../domain/repositories/SocketRepository";
import { Events } from "../domain/entities/Events";
import { Notification } from "../../../notification/domain/entites/Notification";
import { Socket, io } from "socket.io-client";

export class SocketIORepository implements SocketRepository {
    constructor(private readonly url: string) {}

    async connect(): Promise<any> {
        return new Promise<Socket> ((resolve, reject) => {
            try {
                const socket = io(this.url);
                resolve(socket);
            } catch (error: any ) {
                reject(error);
            }
        })
    }

    async notify(eventEmit: Events, notification: Notification): Promise<void> {
        return new Promise<void> ( async (resolve, reject) => {
            try {
                const socket = await this.connect();
                socket.emit(eventEmit, notification);
                resolve();
            } catch (error: any ) {
                reject(error);
            }
        })
    }

}