import { LikedImageInstance } from "../controllers/LikeImageController"
import { Router } from "express"

const likedRoute = Router()

likedRoute.post("/", (req, res) =>
  LikedImageInstance(req, res).setLikedImages(),
)
likedRoute.get("/", (req, res) => LikedImageInstance(req, res).getLikedImages())



export default likedRoute
