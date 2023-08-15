import { LikedModel } from "../db/schema/LikedImages.ts"
import type { Request, Response } from "express"
class LikedImagesController {
  constructor(
    public req: Request,
    public res: Response,
  ) {}
  async setLikedImages() {
    try {
      await LikedModel.create({
        ...this.req.body,
      })
      this.res.send({ state: "success" })
      console.log("man")
    } catch (ex) {
      this.res.status(400).send(ex)
    }
  }
  async getLikedImages() {
    try {
      const likedImages = await LikedModel.find()
      this.res.send(likedImages)
    } catch (ex) {
      this.res.status(400).send(ex)
    }
  }
}

export const LikedImageInstance = (req: Request, res: Response) =>
  new LikedImagesController(req, res)
