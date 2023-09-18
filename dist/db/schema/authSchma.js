import mongoose from "mongoose";
import jwt from "jsonwebtoken";
const authSchema = new mongoose.Schema({
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
    const authToken = jwt.sign({ email: this.email }, process.env.JWT_SECRET);
    return authToken;
};
export const authModel = mongoose.model("Auth", authSchema);
