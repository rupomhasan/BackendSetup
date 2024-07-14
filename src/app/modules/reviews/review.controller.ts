import { catchAsync } from "../../Utils/catchAsync";
import { ReviewServices } from "./review.service";
import { sendResponse } from "../../Utils/sendResponse";

const addReview = catchAsync(async (req, res, next) => {

    const { slug } = req.params
    const reviewData = req.body
    const result = await ReviewServices.addReview(slug, reviewData)
    sendResponse(res, {
        success: true, statusCode: 200, message: "Review Successfully added", data: result
    })

})

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
const getSpecificMovieReviews = catchAsync(async (req, res, next) => {



    const { slug } = req.params

    const result = await ReviewServices.getSpecificMovieReviews(slug)

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



const getSpecificReviewOfMovie = catchAsync(async (req, res, next) => {


    const {  id } = req.params

    const result = await ReviewServices.getSpecificReviewOfMovie( id)


    if (result) {
        sendResponse(res, {
            success: true, statusCode: 200, message: "reviews fetched successfully",
            data: result
        })
    }
})
export const ReviewControllers = {
    getSpecificMovieReviews,
    getSpecificReviewOfMovie,
    addReview
}