"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const FavImageController_1 = require("../controllers/FavImageController");
const FavRouter = (0, express_1.Router)();
FavRouter.post("/", (req, res) => (0, FavImageController_1.favImageInstance)(req, res).setFavImg());
FavRouter.get("/", (req, res) => (0, FavImageController_1.favImageInstance)(req, res).getFavImages());
FavRouter.delete("/", (req, res) => (0, FavImageController_1.favImageInstance)(req, res).deleteAllFavs());
exports.default = FavRouter;
