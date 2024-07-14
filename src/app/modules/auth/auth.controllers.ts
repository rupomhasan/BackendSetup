import httpStatus from "http-status";
import { catchAsync } from "../../Utils/catchAsync";
import { sendResponse } from "../../Utils/sendResponse";
import { AuthServices } from "./auth.services";
import config from "../../config";

const register = catchAsync(async (req, res) => {

    const result = await AuthServices.register(req.body)
    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "",
        data: result
    })
})

const login = catchAsync(async (req, res) => {

    const { accessToken, refreshToken } = await AuthServices.login(req.body)
    res.cookie("refreshToken", refreshToken, {
        httpOnly: true,
        secure: config.node_env === "production"
    })
    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "",
        data: accessToken
    })
})

export const AuthControllers = {
    register, login
}

