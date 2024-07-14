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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MovieService = void 0;
const movie_model_1 = require("./movie.model");
const QueryBuilder_1 = __importDefault(require("../../build/QueryBuilder"));
const createMovieIntoDB = (movie) => __awaiter(void 0, void 0, void 0, function* () {
    // const result = await Movie.create(movie)
    const result = new movie_model_1.Movie(movie);
    const slug = result.createSlug(movie);
    result.slug = slug;
    yield result.save();
    return result;
});
const getAllMovies = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    /*
        let searchTerm = ""
        if (payload?.searchField) {
            searchTerm = payload.searchTerm as string
        }
    
        // search query
    
        const searchableFields = ['title', 'genre']
    
        const searchMovie = Movie.find({
            $or: searchableFields.map((field) => ({
                [field]: { $regex: searchTerm, $options: "i" },
            }))
        })
    
        // pagination
        let skip: number = 0;
        let limit: number = Number(payload?.limit) || 10
        let page: number = 1
        if (payload?.page) {
            page = Number(payload?.page)
            skip = Number(page - 1) * limit
        }
    
    
        const pagination = searchMovie.skip(skip).limit(limit)
    
        // sorting
        let sortBy = "_releaseDate";
        if (payload?.sortBy) {
            sortBy = payload.sortBy as string
        }
    
        const sortQuery = pagination.sort(sortBy)
    
    
        // field filtering
    
        let fields = "";
        if (payload?.fields) {
            fields = (payload.fields as string).split(",").join(" ");
        }
        const fieldQuery = sortQuery.select(fields)
    
        // filtering -- Exact Match -
        const queryObj = { ...payload }
        const excludedFields = ["searchTerm", "page", "limit", "sortBy", "fields"];
        excludedFields.forEach((e) => delete queryObj[e])
    
        const result = await fieldQuery.find(queryObj) */
    const movieQuery = new QueryBuilder_1.default(movie_model_1.Movie.find({}), payload);
    const result = yield movieQuery.modelQuery;
    return result;
});
const getSingleMovie = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield movie_model_1.Movie.findById({ _id: id });
    return result;
});
// const getSingleMovieBySlack = async (slug: string) => {
//     const result = await Movie.findOne({ slug: slug })
//     return result
// }
exports.MovieService = {
    createMovieIntoDB,
    getAllMovies,
    getSingleMovie,
    // getSingleMovieBySlack
};
