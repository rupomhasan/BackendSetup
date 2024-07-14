import mongoose from "mongoose";
import { TErrorSources, TGenericErrorResponse } from "../interface/error.interface";

const handleCastError = (err: mongoose.Error.CastError): TGenericErrorResponse => {
    const errorSources: TErrorSources = [{
        path: err?.path,
        message: err?.message
    }]

    let statusCode = 400;

    return {
        statusCode,
        message: "CastError",
        errorSources
    }

}

export default handleCastError