import { z } from "zod";

export const loginUserValidationSchema = z.object({
    body: z.object({
        email: z.string().email(),
        password: z.string()
    })
}) 