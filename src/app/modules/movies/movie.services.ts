import { Movie } from "./movie.model";
import { TMovie } from "./movie.interface";

const createMovieIntoDB = async (movie: TMovie) => {

    // const result = await Movie.create(movie)

    const result = new Movie(movie);

    const slug = result.createSlug(movie);

    result.slug = slug;
    await result.save()

    // return result
}
const getAllMovies = async () => {
    const result = await Movie.find({})
    return result;
}


const getSingleMovie = async (id: string) => {

    const result = await Movie.findById({ _id: id })

    return result
}

const getSingleMovieBySlack = async (slug: string) => {
    const result = await Movie.findOne({ slug: slug })

    return result
}

export const MovieService = {
    createMovieIntoDB,
    getAllMovies,
    getSingleMovie,
    getSingleMovieBySlack

} 