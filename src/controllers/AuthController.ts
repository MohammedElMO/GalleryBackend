import type { Request, Response } from "express"
import { authModel } from "../db/schema/authSchma"

class AuthController {
  constructor(
    public req: Request,
    public res: Response,
  ) {}

  async signIn() {
    try {
      const userMail = this.req.body.email
      const user = await authModel.findOne({ email: userMail })
      if (user)
        return this.res
          .status(403)
          .send({ warning: "this email have been used" })

      const rigesterUser = await authModel.create({
        ...this.req.body,
      })
      this.res.send(rigesterUser)
      // const token = rigesterUser.injectToken()
      // this.res.header("auth-token", token).send({ state: "success" })
    } catch (ex) {
      this.res.status(500).send(ex)
    }
  }

  async Login() {}
}

export const AuthInstance = (req: Request, res: Response) =>
  new AuthController(req, res)
