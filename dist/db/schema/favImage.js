"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.favModel = void 0;
const mongoose_1 = require("mongoose");
const FavImageSchema = new mongoose_1.Schema({
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
exports.favModel = (0, mongoose_1.model)("favImages", FavImageSchema);
