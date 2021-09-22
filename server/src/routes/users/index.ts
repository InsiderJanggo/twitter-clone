import { Router } from "express";
import usersQuery from "../../query/users.query";
const router = Router()

router.get('/', async(req, res, next) => {
    await usersQuery.getAll()
    .asCallback((err: any, results: any) => {
        if(err) return next(err);
        res.json(results)
    })
})

export default router