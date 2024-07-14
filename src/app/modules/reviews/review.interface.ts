import mongoose from "mongoose";

export type TReview = {
    email: string;
    rating: number;
    comment: string;
    movie: mongoose.Schema.Types.ObjectId;
}