import { Express, json } from "express"
import likedRoute from "./liked.routes"
import cors from "cors"
import authRouter from "./auth.routes"
import FavRouter from "./fav.routes"
import AlbumRouter from "./album.routes"

export default function useRoutes(app: Express) {
  app.use(json())
  app.use(
    cors({
      origin: "https://gallery-ar8hf5x64-mohammedelmo.vercel.app",
      optionsSuccessStatus: 200,
    }),
  )
  app.use(authRouter)
  app.use("/api/liked", likedRoute)
  app.use("/api/fav", FavRouter)
  app.use("/api/album", AlbumRouter)
}
