import knex from "../db/knex";
import { users } from "../db/constants/tableNames";

class UsersQuery {
    getAll() {
        return knex.select('*').from(users)
    }
    getOne(id: any) {
        return knex(users).where({ id: id }).first();
    }
}

export default new UsersQuery();