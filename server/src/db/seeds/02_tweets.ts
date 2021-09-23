import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    await knex("table_name").del();
    await knex("table_name").insert([
        { 
            colName: "rowValue1" 
        },
    ]);
};
