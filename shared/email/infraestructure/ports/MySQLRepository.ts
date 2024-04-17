import { DatabaseRepository } from "../../domain/repository/databaseRepository";
import { db } from "../../../database/application/connection";

export class MySQLRepository implements DatabaseRepository {
    async getUser(id_habitat: number): Promise<string> {
        try {
            console.log('Aqui');
            const query = 'SELECT id_user, u.email FROM habitats AS h INNER JOIN users AS u ON h.id_user = u.id WHERE h.id = ?';
            const [row] : any = await db.execute(query, [id_habitat]);
            console.log(row[0].email);
            return row[0].email;
        } catch (error: any) {
            throw new Error(error);
        }
    }
}