import mongoose from "mongoose"
import { LikedImagesSchema } from "./LikedImages.ts"

const AlbumSchema = new mongoose.Schema({
  content: {
    type: [LikedImagesSchema],
  },
  albumName: String,
  albumDesc: String,
})

export const AlbumModel = mongoose.model("Albums", AlbumSchema)
