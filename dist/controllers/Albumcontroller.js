var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { AlbumModel } from "../db/schema/Album";
class AlbumController {
    constructor(req, res) {
        this.req = req;
        this.res = res;
    }
    setAlbums() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const albumName = this.req.body.albumName;
                const existed = yield AlbumModel.findOne({ albumName });
                if (existed)
                    return this.res.send({
                        state: `this album Aleardy Exist with the name ${existed.albumName}`,
                    });
                const album = yield AlbumModel.create(Object.assign({}, this.req.body));
                this.res.send({ state: "success" });
            }
            catch (ex) {
                this.res.status(400).send(ex);
            }
        });
    }
    getAlbums() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const albums = yield AlbumModel.find();
                this.res.send(albums);
            }
            catch (ex) {
                this.res.status(400).send(ex);
            }
        });
    }
    deleteAlbums() {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const ids = (_a = this.req.get("Ids")) === null || _a === void 0 ? void 0 : _a.split(",");
                if (ids)
                    ids.forEach((id) => __awaiter(this, void 0, void 0, function* () {
                        yield AlbumModel.findByIdAndRemove(id);
                    }));
                console.log(ids);
                this.res.send({ state: "Suceess" });
            }
            catch (ex) {
                this.res.send(ex);
            }
        });
    }
    getAllNames() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const albumsName = yield AlbumModel.find().select("albumName");
                this.res.send(albumsName);
            }
            catch (ex) {
                this.res.status(400).send(ex);
            }
        });
    }
    InserIntoAlbum() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const sentName = this.req.params.albumName;
                const SelectedAlbum = yield AlbumModel.findOneAndUpdate({
                    albumName: sentName,
                }, {
                    $push: {
                        content: this.req.body[0],
                    },
                });
                this.res.send(SelectedAlbum);
            }
            catch (ex) {
                this.res.status(400).send(ex);
            }
        });
    }
}
export const Album = (req, res) => new AlbumController(req, res);
