"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LikedModel = exports.LikedImagesSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
exports.LikedImagesSchema = new mongoose_1.default.Schema({
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
});
exports.LikedModel = mongoose_1.default.model("LikedImages", exports.LikedImagesSchema);
