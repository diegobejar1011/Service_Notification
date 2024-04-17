export interface DatabaseRepository {
    getUser(id_habitat: number) : Promise<string>;
}