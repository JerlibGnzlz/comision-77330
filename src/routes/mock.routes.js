import { Router } from "express"
import { createUserMock } from "../controllers/user.controller.js"
import { createUsersMock } from "../controllers/user.controller.js"


const router = Router()

router.get("/mocks", createUserMock)
router.get("/mocks/:quantity", createUsersMock)

export default router