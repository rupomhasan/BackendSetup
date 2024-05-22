import mongoose, { Schema } from "mongoose";
import { TMovie, TMovieModel, TReview } from "./movie.interface";


import { format } from "date-fns"
import slugify from 'slugify'

const reviewSchema = new Schema<TReview>({
    email: { type: String, required: true },
    rating: { type: Number, required: true },
    comment: { type: String, required: true }
});

const movieSchema = new Schema<TMovie>({
    title: { type: String, required: true },
    description: { type: String, required: true },
    releaseDate: { type: String, required: true },
    genre: { type: String, required: true },
    isDeleted: { type: Boolean, default: false },
    viewCount: { type: Number, default: 0 },
    reviews: [reviewSchema]
});

/* movieSchema.pre("save", async function (next) {
    const date = format(this.releaseDate, 'dd-mm-yyy')
    this.slug = slugify(`${this.title}-${date}`, { lower: true })
next
}) */


movieSchema.method('createSlug', function createSlug(movie: TMovie) {
    const date = format(movie.releaseDate, 'dd-mm-yyy')
    const slug = slugify(`${movie.title}-${date}`, { lower: true })
})

export const Movie = mongoose.model<TMovie, TMovieModel>("Movie", movieSchema); 