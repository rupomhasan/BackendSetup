import mongoose, { Schema, model } from "mongoose";
import { TReview } from "./review.interface";

const reviewSchema = new Schema<TReview>({
    email: { type: String, required: true },
    rating: { type: Number, required: true },
    comment: { type: String, required: true },
    movie: { type: mongoose.Schema.Types.ObjectId, ref: 'Movie' }
}, {
    timestamps: true
});



export const Review = mongoose.model<TReview>("Review", reviewSchema)
