import { Express, json } from "express"
import likedRoute from "./liked.routes.ts"
import cors from "cors"
import authRouter from "./auth.routes.ts"
import FavRouter from "./fav.routes.ts"
import AlbumRouter from "./album.routes.ts"


export default function useRoutes(app: Express) {
  app.use(json())
  app.use(cors())
  app.use(authRouter)
  app.use("/api/liked", likedRoute)
  app.use("/api/fav", FavRouter)
  app.use("/api/album", AlbumRouter)
}
