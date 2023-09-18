"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
function connectDb() {
    mongoose_1.default
        .connect(process.env.MONGO_DB_CONNECTION)
        .then(() => console.log("mogodb is Connecting..."))
        .catch((err) => console.log("Error occured", err));
}
exports.default = connectDb;
