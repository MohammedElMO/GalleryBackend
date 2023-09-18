"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlbumModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const LikedImages_1 = require("./LikedImages");
const AlbumSchema = new mongoose_1.default.Schema({
    content: {
        type: [LikedImages_1.LikedImagesSchema],
    },
    albumName: String,
    albumDesc: String,
});
exports.AlbumModel = mongoose_1.default.model("Albums", AlbumSchema);
