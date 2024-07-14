import express from 'express'
import { UserControllers } from './user.controllers'
import validateRequest from '../../Middleware/validateRequest'
import { UserValidations } from './user.validation'
import { auth } from '../../Middleware/auth'
import { USER_Role } from './user.constant'
const route = express.Router()

route.post('/admin', validateRequest(UserValidations.createAdminValidationSchema), auth(USER_Role.ADMIN, USER_Role.SUPPER_ADMIN), UserControllers.crateAdmin)

route.put('/userId', validateRequest(UserValidations.updatedUserValidations), auth(USER_Role.ADMIN, USER_Role.SUPPER_ADMIN), UserControllers.updateUser)


export const UserRoutes = route