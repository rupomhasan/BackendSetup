import { z } from "zod";

export const reviewValidationSchema = z.object({

    movie: z.string().optional(),
    rating: z.string(),
    comment: z.string(),
    email: z.string()


})
