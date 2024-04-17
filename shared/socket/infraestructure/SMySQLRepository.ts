import { db } from '../../database/application/connection';
import { DatabaseRepository } from '../domain/repositories/SDatabaseRepository';

export class SMySQLRepository implements DatabaseRepository {
    async getUser(id_habitat: number): Promise<number> {
        try {
            const query = 'SELECT h.id FROM habitats AS h INNER JOIN users as u ON h.id_user = u.id WHERE h.id = ? LIMIT 1';
            const [row] : any = await db.execute(query, [id_habitat]);
            return row[0].id;
        } catch (error : any) {
            throw new Error(error.message);
        }
    }
}
