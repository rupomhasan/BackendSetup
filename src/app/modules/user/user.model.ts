import mongoose, { Schema } from "mongoose";
import { TUser } from "./user.interface";
import { USER_Role, USER_STATUS } from "./user.constant";
import bcryptjs from 'bcryptjs'
import config from "../../config";
const userSchema = new Schema<TUser>({
    name: { type: String, required: true },
    role: { enum: Object.keys(USER_Role) },
    email: {
        type: String, required: [true, "Email is required"],
        unique: true
    },
    password: { type: String, required: [true, "Password is required"], select: 0 },
    status: {
        type: String, required: [true, "Status is required"],
        enum: Object.keys(USER_STATUS)
    }, passwordChangedAt: {
        type: Date
    }
})



userSchema.pre("save", async function (next) {
    const user = this
    user.password = await bcryptjs.hash(user.password, Number(config.bcrypt_salt_round))
    next()
})
userSchema.post("save", async function (doc, next) {

    doc.password = "";
    next()
})
export const User = mongoose.model<TUser>("User", userSchema)