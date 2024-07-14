import { Movie } from "./movie.model";
import { TMovie } from "./movie.interface";
import QueryBuilder from "../../build/QueryBuilder";

const createMovieIntoDB = async (movie: TMovie) => {

    // const result = await Movie.create(movie)

    const result = new Movie(movie);

    const slug = result.createSlug(movie);

    result.slug = slug;
    await result.save()

    return result
}
const getAllMovies = async (payload: Record<string, unknown>) => {
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

    const movieQuery = new QueryBuilder(Movie.find({}), payload)

    const result = await movieQuery.modelQuery
    return result;




}


const getSingleMovie = async (id: string) => {

    const result = await Movie.findById({ _id: id })

    return result
}

// const getSingleMovieBySlack = async (slug: string) => {
//     const result = await Movie.findOne({ slug: slug })

//     return result
// }

export const MovieService = {
    createMovieIntoDB,
    getAllMovies,
    getSingleMovie,
    // getSingleMovieBySlack

} 