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
exports.AuthInstance = void 0;
const authSchma_1 = require("../db/schema/authSchma");
class AuthController {
    constructor(req, res) {
        this.req = req;
        this.res = res;
    }
    signIn() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const userMail = this.req.body.email;
                const user = yield authSchma_1.authModel.findOne({ email: userMail });
                if (user)
                    return this.res
                        .status(403)
                        .send({ warning: "this email have been used" });
                const rigesterUser = yield authSchma_1.authModel.create(Object.assign({}, this.req.body));
                this.res.send(rigesterUser);
                // const token = rigesterUser.injectToken()
                // this.res.header("auth-token", token).send({ state: "success" })
            }
            catch (ex) {
                this.res.status(500).send(ex);
            }
        });
    }
    Login() {
        return __awaiter(this, void 0, void 0, function* () { });
    }
}
const AuthInstance = (req, res) => new AuthController(req, res);
exports.AuthInstance = AuthInstance;
