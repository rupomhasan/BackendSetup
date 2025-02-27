import { z } from "zod";
import { USER_Role, USER_STATUS } from "./user.constant";

const createAdminValidationSchema = z.object({
    body: z.object({
        name: z.string(),
        role: z.nativeEnum(USER_Role).default(USER_Role.ADMIN),
        email: z.string().email(),
        password: z.string(),
        status: z.nativeEnum(USER_STATUS).default(USER_STATUS.ACTIVE)
    })
})

const updatedUserValidations = z.object({
    body: z.object({
        name: z.string().optional(),
        role: z.nativeEnum(USER_Role).optional(),
        status: z.nativeEnum(USER_STATUS).optional()
    })
})


export const UserValidations = {
    createAdminValidationSchema,
    updatedUserValidations

}