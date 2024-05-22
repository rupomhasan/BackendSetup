import { Model } from "mongoose";

export type TReview = {
    email: string;
    rating: number;
    comment: string;
};

export type TMovie = {
    title: string;
    description: string;
    releaseDate: string;
    genre: string;
    isDeleted: boolean;
    slug: string;
    viewCount: number;
    reviews: [TReview];
};



export type TMovieMethods = {

    createSlug(movie: TMovie): string
}

export type TMovieModel = Model<TMovie, {}, TMovieMethods>;