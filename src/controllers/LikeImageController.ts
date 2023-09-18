import { LikedModel } from "../db/schema/LikedImages"
import type { Request, Response } from "express"
class LikedImagesController {
  constructor(
    public req: Request,
    public res: Response,
  ) {}
  async setLikedImages() {
    try {
      const imgUrl = this.req.body.url
      const img = await LikedModel.findOne({ url: imgUrl })
      if (img) return this.res.send({ state: "image Exists already!" })

      await LikedModel.create({
        ...this.req.body,
      })
      this.res.send({ state: "success" })
    } catch (ex) {
      this.res.status(400).send({ state: "failure" })
    }
  }
  async getLikedImages() {
    try {
      const likedImages = await LikedModel.find().select([
        "url",
        "alt",
        "liked",
        "src.small",
        "src.landscape",
        "photographer",
      ])

      this.res.send(likedImages)
    } catch (ex) {
      this.res.status(400).send(ex)
    }
  }
}

export const LikedImageInstance = (req: Request, res: Response) =>
  new LikedImagesController(req, res)
