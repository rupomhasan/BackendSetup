import { Request, Response } from "express";

import { MovieService } from "./movie.services";


const createMovie = async (req: Request, res: Response) => {
    try {
        const { movie } = req.body
        const result = await MovieService.createMovieIntoDB(movie)
        res.status(200).json({
            success: true,
            message: 'Movie Created successfully',
            data: result
        })
    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: error.message || 'something went wrong',
            error
        })
    }
}

const getMovies = async (req: Request, res: Response) => {
    try {
        const result = await MovieService.getAllMovies()
        res.status(200).json({
            success: true,
            message: "Movies fetched successfully",
            data: result
        })
    }
    catch (error: any) {
        res.status(500).json({
            success: false,
            message: error.message || "something went wrong for fetched movies",
            error
        })
    }
}



const getMovieById = async (req: Request, res: Response) => {
    try {

        const { movieId } = req.params
        const result = await MovieService.getSingleMovie(movieId)
        res.status(200).json({
            success: true,
            message: "Movie fetched successfully",
            data: result
        })
    }
    catch (error: any) {
        res.status(500).json({
            success: false,
            message: error.message || "something went wrong for fetched movies",
            error
        })
    }
}

const getMovieBySlack = async (req: Request, res: Response) => {
    try {

        const { slug } = req.params
        const result = await MovieService.getSingleMovieBySlack(slug)
        res.status(200).json({
            success: true,
            message: "Movie fetched successfully",
            data: result
        })
    }
    catch (error: any) {
        res.status(500).json({
            success: false,
            message: error.message || "something went wrong for fetched movies",
            error
        })
    }
}
export const MovieController = {
    createMovie,
    getMovies,
    getMovieById,
    getMovieBySlack
} 