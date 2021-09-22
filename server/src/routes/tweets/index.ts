import { Router } from "express";
import tweetsQuery from "../../query/tweets.query";
const router = Router()

router.get('/', async(req, res, next) => {
    await tweetsQuery.getAll()
    .asCallback((err: any, results: any) => {
        if(err) return next(err);
        res.json(results)
    })
})

export default router