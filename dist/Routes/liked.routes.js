"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const LikeImageController_1 = require("../controllers/LikeImageController");
const express_1 = require("express");
const likedRoute = (0, express_1.Router)();
likedRoute.post("/", (req, res) => (0, LikeImageController_1.LikedImageInstance)(req, res).setLikedImages());
likedRoute.get("/", (req, res) => (0, LikeImageController_1.LikedImageInstance)(req, res).getLikedImages());
exports.default = likedRoute;
