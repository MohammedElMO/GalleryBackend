import { favModel } from "../db/schema/favImage"
import type { Request, Response } from "express"
class FavImage {
  constructor(
    public req: Request,
    public res: Response,
  ) {}

  async setFavImg() {
    try {
      const imgUrl = this.req.body.src.tiny
      const img = await favModel.findOne({ "src.tiny": imgUrl })

      await favModel.create(this.req.body)
      this.res.send({ state: "success" })
    } catch (ex) {
      this.res.status(400)
      this.res.send({ state: "failure" })
    }
  }
  async getFavImages() {
    try {
      const favImages = await favModel
        .find()
        .select([
          "_id",
          "url",
          "alt",
          "src.small",
          "src.tiny",
          "photographer",
          "alt",
        ])
      this.res.send(favImages)
    } catch (ex) {
      this.res.status(400).send(ex)
    }
  }

  async deleteAllFavs() {
    try {
      const allDeleted = await favModel.deleteMany()
      if (allDeleted.acknowledged)
        return this.res.send({ state: "all Favs were Deleted" })

      this.res.status(400).send({ state: "faled to delete all Favs" })
    } catch (ex) {
      this.res.status(400).send(ex)
    }
  }
}

export const favImageInstance = (req: Request, res: Response) =>
  new FavImage(req, res)
