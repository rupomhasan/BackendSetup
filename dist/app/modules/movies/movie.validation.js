"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.movieValidationSchema = void 0;
const zod_1 = require("zod");
exports.movieValidationSchema = zod_1.z.object({
    title: zod_1.z.string(),
    description: zod_1.z.string(),
    releaseDate: zod_1.z.string(),
    genre: zod_1.z.string(),
    isDeleted: zod_1.z.boolean(),
    slug: zod_1.z.string().optional(),
    viewCount: zod_1.z.number(),
    totalCount: zod_1.z.number()
});
