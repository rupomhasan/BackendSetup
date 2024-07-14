"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MovieController = void 0;
const movie_services_1 = require("./movie.services");
const catchAsync_1 = require("../../Utils/catchAsync");
const createMovie = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { movie } = req.body;
    const result = yield movie_services_1.MovieService.createMovieIntoDB(movie);
    res.status(200).json({
        success: true,
        message: 'Movie Created successfully',
        data: result
    });
}));
const getMovies = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // if (req.query.slug) {
    //     const { slug } = req.query
    //     const result = await MovieService.getSingleMovieBySlack(slug as string)
    //     res.status(200).json({
    //         success: true,
    //         message: "Movie fetched successfully",
    //         data: result
    //     })
    // }
    const result = yield movie_services_1.MovieService.getAllMovies(req === null || req === void 0 ? void 0 : req.query);
    res.status(200).json({
        success: true,
        message: "Movies fetched successfully",
        data: result
    });
}));
const getMovieById = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { movieId } = req.params;
    const result = yield movie_services_1.MovieService.getSingleMovie(movieId);
    res.status(200).json({
        success: true,
        message: "Movie fetched successfully",
        data: result
    });
}));
/* const getMovieBySlack = async (req: Request, res: Response) => {
    try {


    }
    catch (error: any) {
        res.status(500).json({
            success: false,
            message: error.message || "something went wrong for fetched movies",
            error
        })
    }
} */
exports.MovieController = {
    createMovie,
    getMovies,
    getMovieById,
    // getMovieBySlack
};
