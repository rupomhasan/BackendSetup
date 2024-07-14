import { NextFunction, Request, Response } from "express";
import { AnyZodObject } from "zod";
import { catchAsync } from "../Utils/catchAsync";

const validateRequest = (schema: AnyZodObject) => {
    return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
        const parseBody = await schema.parseAsync({
            body: req.body,
        });
        req.body = parseBody.body;
        next()
    })
}
export default validateRequest;