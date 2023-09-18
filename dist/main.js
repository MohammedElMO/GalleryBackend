"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Routes_1 = __importDefault(require("./Routes"));
const mongoConnection_1 = __importDefault(require("./db/mongoConnection"));
require("dotenv/config");
const express_1 = __importDefault(require("express"));
(0, mongoConnection_1.default)();
const app = (0, express_1.default)();
(0, Routes_1.default)(app);
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log("working on PORT" + PORT + "..."));
