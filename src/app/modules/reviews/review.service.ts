import { catchAsync } from "../../Utils/catchAsync";
import { Movie } from "../movies/movie.model";
import { TReview } from "./review.interface";
import { Review } from "./review.model";

const addReview = async (slug: string, reviewData: Partial<TReview>) => {

    const session = await Movie.startSession()

    const movie = await Movie.findOne({ _id: slug })

    if (!movie) {
        throw new Error("Movie not found")
    }

    try {


        session.startTransaction()

        const review = await Review.create([{
            movie: movie._id,
            ...reviewData
        }], { session })

        const reviewCounts = await Review.countDocuments({ movie: movie._id }).session(session)

        console.log(reviewCounts)


        await Movie.updateOne({ _id: slug }, { totalRating: reviewCounts }, { session })

        await session.commitTransaction()
        return review

    } catch (error) {

        await session.abortTransaction()
        throw error



    }
}

const getAllReviews = async () => {
    const result = await Review.find({})
    console.log(result)
    return result
}

const getSpecificMovieReviews = async (slug: string) => {

    const result = await Review.find({ movie: slug })


    return result
}


const getSpecificReviewOfMovie = async (id: string) => {

    const result = await Review.findById(id).populate("movie")
    return result

}


export const ReviewServices = {
    getSpecificReviewOfMovie,
    getSpecificMovieReviews,
    getAllReviews,
    addReview
} 