import { Model } from "mongoose";

;

export type TMovie = {
    title: string;
    description: string;
    releaseDate: string;
    genre: string;
    isDeleted: boolean;
    slug: string;
    viewCount: number;
    totalRating: number
};



export type TMovieMethods = {

    createSlug(movie: TMovie): string
}

export type TMovieModel = Model<TMovie, {}, TMovieMethods>;