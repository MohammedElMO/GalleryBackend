import { Router } from "express"
import { AuthInstance } from "../controllers/AuthController"

const authRouter = Router()

authRouter.post("/api/auth", (req, res) => AuthInstance(req, res).signIn())



export default authRouter



