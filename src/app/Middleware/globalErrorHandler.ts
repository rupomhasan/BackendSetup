import { ErrorRequestHandler } from "express";
import { TErrorSources } from "../interface/error.interface";
import handleValidationError from "../errors/handleValidationError";
import { ZodError } from "zod";
import handleZodError from "../errors/handleZodErrors";
import handleCastError from "../errors/handleCastError";
import handleDuplicateError from "../errors/handleDuplicateError";
import AppError from "../errors/AppErrors";

const globalErrorHandler: ErrorRequestHandler = (err, req, res, next) => {

    let statusCode = err.statusCode || 500;
    let message = err.message ||
        "Something went wrong";
    let errorSources: TErrorSources = [{
        path: "",
        message: "Something went wrong"
    }
    ]
    // handleZod Error
    if (err instanceof ZodError) {
        const simplifiedError = handleZodError(err)
        statusCode = simplifiedError?.statusCode;
        message = simplifiedError?.message;
        errorSources = simplifiedError.errorSources
    }
    // handleValidation Error
    else if (err.name === "ValidationError") {
        const simplifiedError = handleValidationError(err);
        statusCode = simplifiedError.statusCode;
        message = simplifiedError?.message;
        errorSources = simplifiedError?.errorSources;
    }

    else if (err.name === "CastError") {
        const simplifiedError = handleCastError(err);
        statusCode = simplifiedError.statusCode;
        message = simplifiedError?.message;
        errorSources = simplifiedError?.errorSources;

    }

    else if (err.code === 11000) {
        const simplifiedError = handleDuplicateError(err);
        statusCode = simplifiedError.statusCode;
        message = simplifiedError?.message;
        errorSources = simplifiedError?.errorSources;

    }
    else if (err instanceof AppError) {
        statusCode = err.statusCode,
            message = err.message
    }

    res.status(500).json({
        success: false,
        message: "something went wrong",
        errorSources,
    })
}

export default globalErrorHandler