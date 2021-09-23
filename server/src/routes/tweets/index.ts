import { Router } from "express";
import tweetsQuery from "../../query/tweets.query";
import { schema } from "../../query/tweets.schema";
const router = Router()

router.get('/', async(req, res, next) => {
    await tweetsQuery.getAll()
    .asCallback((err: any, results: any) => {
        if(err) return next(err);
        res.json(results)
    })
})

router.get('/:id', async(req, res, next) => {
    let { id } = req.params;
    if(!id) return next()

    await tweetsQuery.getOne(id)
    .asCallback((err: any, results: any) => {
        if(err) return next(err);
        res.json(results)
    })
})

router.post('/', async(req, res, next) => {
    let { author, content } = req.body;

    if(!author || !content) {
        return schema.validate({content, author})
        .catch((err) => {
            next(err)
        })
    }

    await tweetsQuery.postOne({
        author: author,
        content: content
    }).asCallback((err: any, results: any) => {
        if(err) return next(err);
        res.json(results)
    })
})

export default router