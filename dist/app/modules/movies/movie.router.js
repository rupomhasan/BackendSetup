"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MovieRoutes = void 0;
const express_1 = __importDefault(require("express"));
const movie_controller_1 = require("./movie.controller");
const review_controller_1 = require("../reviews/review.controller");
const validateRequest_1 = __importDefault(require("../../Middleware/validateRequest"));
const movie_validation_1 = require("./movie.validation");
const router = express_1.default.Router();
router.post('/create-movie', (0, validateRequest_1.default)(movie_validation_1.movieValidationSchema), movie_controller_1.MovieController.createMovie);
router.get('/', movie_controller_1.MovieController.getMovies);
router.get('/:movieId', movie_controller_1.MovieController.getMovieById);
// review 
/*
router.get('/:slug/reviews', async function (req, res) {

    console.log("fetching______")

    // const result = await Review.find({})


    // res.status(200).json({
    //     success: true,
    //     message: 'fetched reviews ',
    //     data: { result: null }
    // })


})
 */
router.get('/:slug/reviews', review_controller_1.ReviewControllers.getSpecificMovieReviews);
router.get('/:id/review', review_controller_1.ReviewControllers.getSpecificReviewOfMovie);
router.post('/:slug/review', review_controller_1.ReviewControllers.addReview);
exports.MovieRoutes = router;
