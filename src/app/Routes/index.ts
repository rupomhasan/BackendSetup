import { Router } from "express";
import { UserRoutes } from "../modules/user/user.route";
import { MovieRoutes } from "../modules/movies/movie.router";
import { AuthRoutes } from "../modules/auth/auth.route";

export const router = Router()

const moduleRoutes = [
    {
        path: "/users",
        route: UserRoutes
    },
    {
        path: "/movies",
        route: MovieRoutes
    },
    {
        path: "/auth",
        route: AuthRoutes
    }
]
moduleRoutes.forEach((moduleRoute) => router.use(moduleRoute.path, moduleRoute.route))