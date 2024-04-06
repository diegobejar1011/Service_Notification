export interface DatabaseRepository {
    getUser(id_habitat: string) : Promise<string>;
}