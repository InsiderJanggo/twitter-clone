import { tweets } from "../db/constants/tableNames";
import knex from "../db/knex";


interface Tweet {
    content: string;
    author: any;
}

class TweetsQuery {
    getAll() {
        return knex.select('*').from(tweets);
    }
    getOne(id: any) {
        return knex(tweets).where({ post_id: id }).first();
    }
    postOne(data: Tweet) {
        return knex(tweets).insert(data);
    }
}

export default new TweetsQuery();