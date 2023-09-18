"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const AuthController_1 = require("../controllers/AuthController");
const authRouter = (0, express_1.Router)();
authRouter.post("/api/auth", (req, res) => (0, AuthController_1.AuthInstance)(req, res).signIn());
exports.default = authRouter;
