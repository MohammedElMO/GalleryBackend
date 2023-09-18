import mongoose from "mongoose";
export default function connectDb() {
    mongoose
        .connect(process.env.MONGO_DB_CONNECTION)
        .then(() => console.log("mogodb is Connecting..."))
        .catch((err) => console.log("Error occured", err));
}
