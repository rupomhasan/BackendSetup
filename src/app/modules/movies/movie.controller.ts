import { Request, Response } from "express";

import { MovieService } from "./movie.services";
import { catchAsync } from "../../Utils/catchAsync";


const createMovie = catchAsync(
    async (req: Request, res: Response) => {
        const { movie } = req.body

        const result = await MovieService.createMovieIntoDB(movie)

        res.status(200).json({
            success: true,
            message: 'Movie Created successfully',
            data: result
        })
    }

)
const getMovies = catchAsync(
    async (req: Request, res: Response) => {




        // if (req.query.slug) {

        //     const { slug } = req.query


        //     const result = await MovieService.getSingleMovieBySlack(slug as string)
        //     res.status(200).json({
        //         success: true,
        //         message: "Movie fetched successfully",
        //         data: result
        //     })
        // }

        const result = await MovieService.getAllMovies(req?.query)
        res.status(200).json({
            success: true,
            message: "Movies fetched successfully",
            data: result
        })

    }
)



const getMovieById = catchAsync(
    async (req: Request, res: Response) => {
        const { movieId } = req.params
        const result = await MovieService.getSingleMovie(movieId)
        res.status(200).json({
            success: true,
            message: "Movie fetched successfully",
            data: result
        })
    }
)

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
export const MovieController = {
    createMovie,
    getMovies,
    getMovieById,
    // getMovieBySlack
} 