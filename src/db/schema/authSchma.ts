import mongoose, { Model } from "mongoose"
import jwt from "jsonwebtoken"
type AuthSchema = {
  email: string
  password: string
  username: string
}
type AuthSchemaMethods = {
  injectToken(): string
}
type AuthModel = Model<AuthSchema, {}, AuthSchemaMethods>
const authSchema = new mongoose.Schema<
  AuthSchema,
  AuthModel,
  AuthSchemaMethods
>({
  email: {
    type: String,
    required: true,
  },
  username: {
    type: String,
  },
  password: {
    type: String,
    required: true,
  },
})

authSchema.methods.injectToken = function () {
  const authToken = jwt.sign({ email: this.email }, process.env.JWT_SECRET!)
  return authToken
}

export const authModel = mongoose.model<AuthSchema, AuthModel>(
  "Auth",
  authSchema,
)
