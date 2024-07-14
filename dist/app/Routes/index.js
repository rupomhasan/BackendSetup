"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const user_route_1 = require("../modules/user/user.route");
const movie_router_1 = require("../modules/movies/movie.router");
exports.router = (0, express_1.Router)();
const moduleRoutes = [
    {
        path: "/users",
        route: user_route_1.UserRoutes
    },
    {
        path: "/movies",
        route: movie_router_1.MovieRoutes
    }
];
moduleRoutes.forEach((moduleRoute) => exports.router.use(moduleRoute.path, moduleRoute.route));
