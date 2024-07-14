import mongoose, { Schema } from "mongoose";
import { TMovie, TMovieModel } from "./movie.interface";


import { format } from "date-fns"
import slugify from 'slugify'



const movieSchema = new Schema<TMovie>({
    title: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    releaseDate: { type: String, required: true },
    genre: { type: String, required: true },
    isDeleted: { type: Boolean, default: false },
    viewCount: { type: Number, default: 0 },
    totalRating: { type: Number, default: 0 }
},
    {
        timestamps: true
    }
);

/* movieSchema.pre("save", async function (next) {
    const date = format(this.releaseDate, 'dd-mm-yyy')
    this.slug = slugify(`${this.title}-${date}`, { lower: true })
next
}) */


movieSchema.method('createSlug', function createSlug(movie: TMovie) {
    const date = format(movie.releaseDate, 'dd-mm-yyy')
    const slug = slugify(`${movie.title}-${date}`, { lower: true })
    return slug
})

export const Movie = mongoose.model<TMovie, TMovieModel>("Movie", movieSchema); 