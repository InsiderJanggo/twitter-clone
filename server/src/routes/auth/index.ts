import { Router } from "express";
import { login, register } from "../../query/auth/auth.query";
const router = Router()


router.post('/login', login)
router.post('/register', register)

export default router