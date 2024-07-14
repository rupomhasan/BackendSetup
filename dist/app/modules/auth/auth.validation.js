"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginUserValidationSchema = void 0;
const zod_1 = require("zod");
exports.loginUserValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        email: zod_1.z.string().email(),
        password: zod_1.z.string()
    })
});
