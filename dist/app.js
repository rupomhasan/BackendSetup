"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const notFoundRoute_1 = __importDefault(require("./app/Middleware/notFoundRoute"));
const globalErrorHandler_1 = __importDefault(require("./app/Middleware/globalErrorHandler"));
const Routes_1 = require("./app/Routes");
const app = (0, express_1.default)();
// parser 
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use("/api/v1", Routes_1.router);
app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.use(globalErrorHandler_1.default);
app.use(notFoundRoute_1.default);
exports.default = app;
