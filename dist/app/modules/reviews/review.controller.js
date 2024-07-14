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
exports.ReviewControllers = void 0;
const catchAsync_1 = require("../../Utils/catchAsync");
const review_service_1 = require("./review.service");
const sendResponse_1 = require("../../Utils/sendResponse");
const addReview = (0, catchAsync_1.catchAsync)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { slug } = req.params;
    const reviewData = req.body;
    const result = yield review_service_1.ReviewServices.addReview(slug, reviewData);
    (0, sendResponse_1.sendResponse)(res, {
        success: true, statusCode: 200, message: "Review Successfully added", data: result
    });
}));
/* const getAllReviews = catchAsync(async (req, res, next) => {

    console.log('click')
    const result = await ReviewServices.getAllReviews()

    if (result.length === 0) {
        if (result.length === 0) {

            sendResponse(res, {
                success: true, statusCode: 200, message: "No review of this movie",
                data: "no review available"
            })

        }
    }
    sendResponse(res, {
        success: true, statusCode: 200, message: "reviews fetched successfully",
        data: result
    })


})

 */
const getSpecificMovieReviews = (0, catchAsync_1.catchAsync)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { slug } = req.params;
    const result = yield review_service_1.ReviewServices.getSpecificMovieReviews(slug);
    if (result.length === 0) {
        if (result.length === 0) {
            (0, sendResponse_1.sendResponse)(res, {
                success: true, statusCode: 200, message: "No review of this movie",
                data: "no review available"
            });
        }
    }
    (0, sendResponse_1.sendResponse)(res, {
        success: true, statusCode: 200, message: "reviews fetched successfully",
        data: result
    });
}));
const getSpecificReviewOfMovie = (0, catchAsync_1.catchAsync)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield review_service_1.ReviewServices.getSpecificReviewOfMovie(id);
    if (result) {
        (0, sendResponse_1.sendResponse)(res, {
            success: true, statusCode: 200, message: "reviews fetched successfully",
            data: result
        });
    }
}));
exports.ReviewControllers = {
    getSpecificMovieReviews,
    getSpecificReviewOfMovie,
    addReview
};
