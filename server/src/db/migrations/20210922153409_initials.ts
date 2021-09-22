import { Knex } from "knex";
import { 
    tweets, 
    users 
} from "../constants/tableNames";
import { v4 as uuidv4 } from 'uuid';


export async function up(knex: Knex): Promise<void> {
    await Promise.all([
        knex.schema.createTable(users, (table) => {
            table.increments('id').primary();
            table.uuid('user_id').defaultTo(uuidv4())
            table.string('username').notNullable().unique();
            table.string('password').notNullable();
            table.timestamp('created_at').defaultTo(knex.fn.now())
            table.timestamp('updated_at').nullable();
        }),
        knex.schema.createTable(tweets, (table) => {
            table.increments('id').primary();
            table.uuid('post_id').defaultTo(uuidv4()).unique()
            table.string('content').notNullable();
            table.integer('author')
            .references('id')
            .inTable(users)
            .unsigned()
            .notNullable();
            table.timestamp('posted_at').defaultTo(knex.fn.now());
        })
    ])
}


export async function down(knex: Knex): Promise<void> {
    await Promise.all([
        users,
        tweets
    ].map((tablename) => knex.schema.dropTableIfExists(tablename)));
}

