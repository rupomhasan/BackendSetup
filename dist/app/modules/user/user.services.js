"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const user_model_1 = require("./user.model");
const createAdminIntoDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const admin = yield user_model_1.User.create(payload);
    return admin;
});
const updateUserFormDB = (_id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const admin = yield user_model_1.User.findByIdAndDelete({ _id }, payload);
    return admin;
});
exports.UserService = {
    createAdminIntoDB,
    updateUserFormDB
};
