import { AlbumModel } from "../db/schema/Album.ts"
import { favModel } from "../db/schema/favImage.ts"
import type { Request, Response } from "express"

class AlbumController {
  constructor(
    public req: Request,
    public res: Response,
  ) {}

  async setAlbums() {
    try {
      const albumName = this.req.body.albumName
      const existed = await AlbumModel.findOne({ albumName })
      if (existed)
        return this.res.send({
          state: `this album Aleardy Exist with the name ${existed.albumName}`,
        })

      const album = await AlbumModel.create({
        ...this.req.body,
      })
      this.res.send({ state: "success" })
    } catch (ex) {
      this.res.status(400).send(ex)
    }
  }
  async getAlbums() {
    try {
      const albums = await AlbumModel.find()
      this.res.send(albums)
    } catch (ex) {
      this.res.status(400).send(ex)
    }
  }

  async deleteAlbums() {
    try {
      const ids = this.req.get("Ids")?.split(",")
      if (ids) 
        ids.forEach(async (id) => {
          await AlbumModel.findByIdAndRemove(id)
        })
      console.log(ids)

      this.res.send({ state: "Suceess" })
    } catch (ex) {
      this.res.send(ex)
    }
  }

  async getAllNames() {
    try {
      const albumsName = await AlbumModel.find().select("albumName")
      this.res.send(albumsName)
    } catch (ex) {
      this.res.status(400).send(ex)
    }
  }

  async InserIntoAlbum() {
    try {
      const sentName = this.req.params.albumName
      const SelectedAlbum = await AlbumModel.findOneAndUpdate(
        {
          albumName: sentName,
        },
        {
          $push: {
            content: this.req.body[0],
          },
        },
      )
      this.res.send(SelectedAlbum)
    } catch (ex) {
      this.res.status(400).send(ex)
    }
  }
}

export const Album = (req: Request, res: Response) =>
  new AlbumController(req, res)
