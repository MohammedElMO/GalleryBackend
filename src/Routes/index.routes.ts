import { Express, json } from "express";
import likedRoute from "./liked.routes.ts";
export function useRoutes (app:Express) {
    app.use(json())
    app.use("/api/liked",likedRoute)
    
}