import { Knex } from "knex";
import bcrypt from 'bcrypt'

var password = bcrypt.hash('admin', 10);

export async function seed(knex: Knex): Promise<void> {
    await knex("table_name").del();
    await knex("table_name").insert([
        { 
           username: 'Admin',
           password: password
        },
    ]);
};
