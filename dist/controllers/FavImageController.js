var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { favModel } from "../db/schema/favImage";
class FavImage {
    constructor(req, res) {
        this.req = req;
        this.res = res;
    }
    setFavImg() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const imgUrl = this.req.body.src.tiny;
                const img = yield favModel.findOne({ "src.tiny": imgUrl });
                yield favModel.create(this.req.body);
                this.res.send({ state: "success" });
            }
            catch (ex) {
                this.res.status(400);
                this.res.send({ state: "failure" });
            }
        });
    }
    getFavImages() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const favImages = yield favModel
                    .find()
                    .select([
                    "_id",
                    "url",
                    "alt",
                    "src.small",
                    "src.tiny",
                    "photographer",
                    "alt",
                ]);
                this.res.send(favImages);
            }
            catch (ex) {
                this.res.status(400).send(ex);
            }
        });
    }
    deleteAllFavs() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const allDeleted = yield favModel.deleteMany();
                if (allDeleted.acknowledged)
                    return this.res.send({ state: "all Favs were Deleted" });
                this.res.status(400).send({ state: "faled to delete all Favs" });
            }
            catch (ex) {
                this.res.status(400).send(ex);
            }
        });
    }
}
export const favImageInstance = (req, res) => new FavImage(req, res);
