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
exports.ReviewServices = void 0;
const movie_model_1 = require("../movies/movie.model");
const review_model_1 = require("./review.model");
const addReview = (slug, reviewData) => __awaiter(void 0, void 0, void 0, function* () {
    const session = yield movie_model_1.Movie.startSession();
    const movie = yield movie_model_1.Movie.findOne({ _id: slug });
    if (!movie) {
        throw new Error("Movie not found");
    }
    try {
        session.startTransaction();
        const review = yield review_model_1.Review.create([Object.assign({ movie: movie._id }, reviewData)], { session });
        const reviewCounts = yield review_model_1.Review.countDocuments({ movie: movie._id }).session(session);
        console.log(reviewCounts);
        yield movie_model_1.Movie.updateOne({ _id: slug }, { totalRating: reviewCounts }, { session });
        yield session.commitTransaction();
        return review;
    }
    catch (error) {
        yield session.abortTransaction();
        throw error;
    }
});
const getAllReviews = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield review_model_1.Review.find({});
    console.log(result);
    return result;
});
const getSpecificMovieReviews = (slug) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield review_model_1.Review.find({ movie: slug });
    return result;
});
const getSpecificReviewOfMovie = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield review_model_1.Review.findById(id).populate("movie");
    return result;
});
exports.ReviewServices = {
    getSpecificReviewOfMovie,
    getSpecificMovieReviews,
    getAllReviews,
    addReview
};
