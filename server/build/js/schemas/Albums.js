"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const Songs_1 = require("./Songs");
const AlbumSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
    },
    artists: {
        type: [String || Number] || String || Number,
        required: true,
    },
    genre: {
        type: String,
        required: true,
    },
    duration: {
        type: String,
        required: true,
    },
    songs: {
        type: [Songs_1.SongsSchemaProtoType],
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    modifiedAt: {
        type: Date
    }
});
const AlbumModel = (0, mongoose_1.model)('Albums', AlbumSchema);
exports.default = AlbumModel;
