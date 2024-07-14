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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_status_1 = __importDefault(require("http-status"));
const AppErrors_1 = __importDefault(require("../../errors/AppErrors"));
const user_model_1 = require("../user/user.model");
const auth_util_1 = require("./auth.util");
const config_1 = __importDefault(require("../../config"));
const register = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield user_model_1.User.findOne({ email: payload.email });
    if (user)
        throw new Error("You already registered  with this email");
    payload.role = "USER";
    return yield user_model_1.User.create(payload);
});
const login = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield user_model_1.User.findOne({ email: payload.email }).select("+password");
    if (!user)
        throw new AppErrors_1.default(http_status_1.default.NOT_FOUND, "User not found");
    if (user.status === "BLOCKED")
        throw new Error("User is blocked");
    const passwordMatched = (0, auth_util_1.isPasswordMatched)(payload.password, user.password);
    if (!passwordMatched)
        throw new Error("Password not matched");
    const jwtPayload = {
        email: user.email,
        role: user.role
    };
    const accessToken = jwt.sign(jwtPayload, config_1.default, {});
});
