import knex from "../../db/knex";
import { users } from "../../db/constants/tableNames";
import { schema } from "./auth.schema";
import bcrypt from 'bcrypt'

export const login = async(req: any, res: any, next: any) => {
    let { username, password } = req.body;

    if(!username || !password) {
        return schema.validate({
            username,
            password
        }).catch((err) => {
            next(err)
        })
    }

    await knex(users)
    .where({username})
    .asCallback((err: any, results: any) => {
        if(err) return next(err)
        let pass = results.password;
        bcrypt.compare(password, pass, (err, response) => {
            if(err) return next(err)
            if(response) {
                return res.json(results)
            } else {
                return next('Wrong Password/Username')
            }
        })
    })
}

export const register = async(req: any, res: any, next: any) => {
    let { username, password } = req.body;

    if(!username || !password) {
        return schema.validate({
            username,
            password
        }).catch((err) => {
            next(err)
        })
    }

    const saltRound: number = 10;
    bcrypt.genSalt(saltRound, (err, salts) => {
        bcrypt.hash(password, salts, async(err, hash) => {
            await knex(users).insert({
                username: username,
                password: hash
            }).asCallback((err: any, results: any) => {
                if(err) return next(err)
                res.json(results)
            })
        })
    })
}