export interface TokenRepository {
    createToken(id_user: number) : string;
}