import mongoose from "mongoose"
// import type { ObjectId } from "mongoose"
// import { type } from "os"
// type LikedImage = {
//   id: ObjectId
//   width: Number
//   height: Number
//   url: String
//   photographer: String
//   photographer_url: String
//   photographer_id: Number
//   avg_color: String
//   src: {
//     original: String
//     large2x: String
//     large: String
//     medium: String
//     small: String
//     portrait: String
//     landscape: String
//     tiny: String
//   }
// }

const LikedImagesSchema = new mongoose.Schema({
  width: Number,
  height: Number,
  url: String,
  photographer: String,
  photographer_url: String,
  photographer_id: Number,
  avg_color: String,
  src: {
    original: String,
    large2x: String,
    large: String,
    medium: String,
    small: String,
    portrait: String,
    landscape: String,
    tiny: String,
  },
  liked: Boolean,
  alt: String,
})

export const LikedModel = mongoose.model("LikedImages", LikedImagesSchema)
