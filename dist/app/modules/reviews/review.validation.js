"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reviewValidationSchema = void 0;
const zod_1 = require("zod");
exports.reviewValidationSchema = zod_1.z.object({
    movie: zod_1.z.string().optional(),
    rating: zod_1.z.string(),
    comment: zod_1.z.string(),
    email: zod_1.z.string()
});
