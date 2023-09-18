"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const authSchema = new mongoose_1.default.Schema({
    email: {
        type: String,
        required: true,
    },
    username: {
        type: String,
    },
    password: {
        type: String,
        required: true,
    },
});
authSchema.methods.injectToken = function () {
    const authToken = jsonwebtoken_1.default.sign({ email: this.email }, process.env.JWT_SECRET);
    return authToken;
};
exports.authModel = mongoose_1.default.model("Auth", authSchema);
