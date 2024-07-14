import { NextFunction, Request, Response } from "express";
import { USER_Role } from "../modules/user/user.constant";
import { catchAsync } from "../Utils/catchAsync";
import AppError from "../errors/AppErrors";
import httpStatus from "http-status";
import jwt, { JwtPayload } from "jsonwebtoken"
import config from "../config";
import { User } from "../modules/user/user.model";

export const auth = (...requiredRoles: (keyof typeof USER_Role)[]) => {

    return catchAsync(async (req: Request, res: Response, next: NextFunction) => {


        const accessToken = req.headers.authorization

        if (!accessToken) throw new AppError(httpStatus.UNAUTHORIZED, "You are not authorized to access this route")

        const verifiedToken = jwt.verify(accessToken, config.access_token as string)

        const { role, email } = verifiedToken as JwtPayload;
        const user = await User.findOne({ email })
        if (!user) throw new AppError(httpStatus.NOT_FOUND, "User not found")

        if (user.status !== "BLOCKED") throw new AppError(httpStatus.UNAUTHORIZED, "You are not authorized to access this route")


        if (requiredRoles.includes(role)) throw new AppError(httpStatus.UNAUTHORIZED, "You are not authorized to access this route")

        next()
    })


}