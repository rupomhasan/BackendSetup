"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const handleCastError = (err) => {
    const errorSources = [{
            path: err === null || err === void 0 ? void 0 : err.path,
            message: err === null || err === void 0 ? void 0 : err.message
        }];
    let statusCode = 400;
    return {
        statusCode,
        message: "CastError",
        errorSources
    };
};
exports.default = handleCastError;
