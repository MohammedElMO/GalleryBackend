import { Router } from "express";
import { favImageInstance } from "../controllers/FavImageController.ts";
const FavRouter = Router();
FavRouter.post("/", (req, res) => favImageInstance(req, res).setFavImg());
FavRouter.get("/", (req, res) => favImageInstance(req, res).getFavImages());
FavRouter.delete("/", (req, res) => favImageInstance(req, res).deleteAllFavs());
export default FavRouter;
