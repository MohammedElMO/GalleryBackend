"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LikedImageInstance = void 0;
const LikedImages_1 = require("../db/schema/LikedImages");
class LikedImagesController {
    constructor(req, res) {
        this.req = req;
        this.res = res;
    }
    setLikedImages() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const imgUrl = this.req.body.url;
                const img = yield LikedImages_1.LikedModel.findOne({ url: imgUrl });
                if (img)
                    return this.res.send({ state: "image Exists already!" });
                yield LikedImages_1.LikedModel.create(Object.assign({}, this.req.body));
                this.res.send({ state: "success" });
            }
            catch (ex) {
                this.res.status(400).send({ state: "failure" });
            }
        });
    }
    getLikedImages() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const likedImages = yield LikedImages_1.LikedModel.find().select([
                    "url",
                    "alt",
                    "liked",
                    "src.small",
                    "src.landscape",
                    "photographer",
                ]);
                this.res.send(likedImages);
            }
            catch (ex) {
                this.res.status(400).send(ex);
            }
        });
    }
}
const LikedImageInstance = (req, res) => new LikedImagesController(req, res);
exports.LikedImageInstance = LikedImageInstance;
