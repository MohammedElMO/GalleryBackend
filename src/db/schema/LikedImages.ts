import mongoose from "mongoose"

export const LikedImagesSchema = new mongoose.Schema({
  url: String,
  photographer: String,
  photographer_url: String,
  avg_color: String,
  src: {
    landscape: String,
    portrait: String,
    small: String,
    medium: String,
    tiny: String,
  },
  liked: Boolean,
  alt: String,
})

export const LikedModel = mongoose.model("LikedImages", LikedImagesSchema)
