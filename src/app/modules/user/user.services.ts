import { TUser } from "./user.interface";
import { User } from "./user.model";

const createAdminIntoDB = async (payload: TUser) => {
    const admin = await User.create(payload)
    return admin
}


const updateUserFormDB = async (_id: string, payload: Partial<TUser>) => {
    const admin = await User.findByIdAndDelete({ _id }, payload)
    return admin;
}

export const UserService = {
    createAdminIntoDB,
    updateUserFormDB
}