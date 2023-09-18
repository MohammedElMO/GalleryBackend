import { Router } from "express";
import { Album } from "../controllers/Albumcontroller";
const AlbumRouter = Router();
AlbumRouter.post("/", (req, res) => Album(req, res).setAlbums());
AlbumRouter.get("/", (req, res) => Album(req, res).getAlbums());
AlbumRouter.get("/names", (req, res) => Album(req, res).getAllNames());
AlbumRouter.delete("/", (req, res) => Album(req, res).deleteAlbums());
AlbumRouter.post("/:albumName", (req, res) => Album(req, res).InserIntoAlbum());
export default AlbumRouter;
