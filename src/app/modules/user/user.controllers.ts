import httpStatus from "http-status";
import { catchAsync } from "../../Utils/catchAsync";
import { sendResponse } from "../../Utils/sendResponse";
import { UserService } from "./user.services";

const crateAdmin = catchAsync(async (req, res) => {
    const result = await UserService.createAdminIntoDB(req.body)
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true, message: "Admin is created successfully",
        data: result,
    })
})

const updateUser = catchAsync(async (req, res) => {
    const { userId } = req.params

    const result = await UserService.updateUserFormDB(userId, req.body)
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true, message: "User is updated successfully!",
        data: result,
    })
})

export const UserControllers = {
    crateAdmin, updateUser
}