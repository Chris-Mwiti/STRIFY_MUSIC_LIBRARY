"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const GenresSchema = new mongoose_1.Schema({
    genre: {
        type: String,
        required: true
    }
}, { timestamps: true });
const GenresModel = (0, mongoose_1.model)('Genres', GenresSchema);
exports.default = GenresModel;
