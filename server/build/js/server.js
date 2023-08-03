"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const appConfig_1 = __importDefault(require("./config/appConfig"));
const app = (0, express_1.default)();
// @TODO: check on how to store env varialble with escape characters
(0, appConfig_1.default)(app, mongoose_1.default);
