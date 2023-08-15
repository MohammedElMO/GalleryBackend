import { useRoutes } from "./Routes/index.routes.ts"
import connectDb from "./db/mongoConnection.ts"
import "dotenv/config"
import express from "express"

connectDb()

const app = express()

useRoutes(app)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log("working on PORT" + PORT + "..."))
