import httpStatus from "http-status";
import AppError from "../../errors/AppErrors";
import { TUser } from "../user/user.interface";
import { User } from "../user/user.model";
import { TLoginUser } from "./auth.interface";
import { isPasswordMatched } from "./auth.util";
import config from "../../config";
import jwt from "jsonwebtoken"
const register = async (payload: TUser) => {
    const user = await User.findOne({ email: payload.email })
    if (user) throw new Error("You already registered  with this email")
    payload.role = "USER"
    return await User.create(payload)
}

const login = async (payload: TLoginUser) => {
    const user = await User.findOne({ email: payload.email }).select("+password")

    if (!user) throw new AppError(httpStatus.NOT_FOUND, "User not found")

    if (user.status === "BLOCKED") throw new Error("User is blocked")


    const passwordMatched = isPasswordMatched(payload.password, user.password)

    if (!passwordMatched) throw new Error("Password not matched")

    const jwtPayload = {
        email: user.email,
        role: user.role
    }

    const accessToken = jwt.sign(jwtPayload, config.access_token as string, { expiresIn: "1d" })

    const refreshToken = jwt.sign(jwtPayload, config.access_token as string, { expiresIn: "10d" })

    return {
        accessToken, refreshToken
    }
}

export const AuthServices = {
    register, login
}