import { Schema, model } from "mongoose";
const FavImageSchema = new Schema({
    url: String,
    photographer: String,
    photographer_url: String,
    avg_color: String,
    src: {
        landscape: String,
        tiny: String,
        portrait: String,
        small: String,
    },
    alt: String,
});
export const favModel = model("favImages", FavImageSchema);
