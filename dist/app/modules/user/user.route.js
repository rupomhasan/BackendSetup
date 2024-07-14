"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoutes = void 0;
const express_1 = __importDefault(require("express"));
const user_controllers_1 = require("./user.controllers");
const validateRequest_1 = __importDefault(require("../../Middleware/validateRequest"));
const user_validation_1 = require("./user.validation");
const route = express_1.default.Router();
route.post('/admin', (0, validateRequest_1.default)(user_validation_1.UserValidations.createAdminValidationSchema), user_controllers_1.UserControllers.crateAdmin);
route.put('/userId', (0, validateRequest_1.default)(user_validation_1.UserValidations.updatedUserValidations), user_controllers_1.UserControllers.updateUser);
exports.UserRoutes = route;
