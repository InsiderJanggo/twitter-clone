import { Router } from "express";
const router = Router()

//Routes
import authRoutes from './auth/index'
import tweetsRoutes from './tweets/index'
import usersRoutes from './users/index'

router.get('/', (req, res) => {
    res.json({
        message: 'Hi API'
    })
})

router.use('/auth', authRoutes)
router.use('/tweets', tweetsRoutes)
router.use('/users', usersRoutes)

export default router