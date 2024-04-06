import { DatabaseRepository } from "../../domain/repository/databaseRepository";
import { db } from "../../../database/application/connection";

export class MySQLRepository implements DatabaseRepository {
    async getUser(id_habitat: string): Promise<string> {
        try {
            const query = 'SELECT id_user, u.email FROM habitat AS h INNER JOIN user AS u ON h.id_user = u.id WHERE h.id = ?';
            const [row] : any = await db.execute(query, [id_habitat]);
            return row[0].email;
        } catch (error: any) {
            throw new Error(error);
        }
    }
}