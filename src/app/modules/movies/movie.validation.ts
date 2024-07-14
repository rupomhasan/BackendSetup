import {  z } from "zod";

export const movieValidationSchema = z.object({

    title: z.string(),
    description: z.string(),
    releaseDate: z.string(),
    genre: z.string(),
    isDeleted: z.boolean(),
    slug: z.string().optional(),
    viewCount: z.number(),
    totalCount: z.number()

})