import useRoutes from "./Routes/index.routes";
import connectDb from "./db/mongoConnection";
import "dotenv/config";
import express from "express";
connectDb();
const app = express();
useRoutes(app);
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log("working on PORT" + PORT + "..."));
