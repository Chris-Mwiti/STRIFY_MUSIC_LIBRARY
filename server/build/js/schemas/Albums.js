"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const Songs_1 = require("./Songs");
const AlbumSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
    },
    artists: [
        {
            type: [mongoose_1.Schema.Types.ObjectId],
            ref: 'Artists',
            required: true
        }
    ],
    genre: [
        {
            type: [mongoose_1.Schema.Types.ObjectId],
            ref: 'Genres',
            required: true
        }
    ],
    duration: {
        type: String,
        required: true,
    },
    songs: {
        type: [Songs_1.SongsSchemaProtoType],
        required: true
    },
    file_path: {
        type: String,
        required: true
    },
    art_path: {
        type: String
    }
}, { timestamps: true });
const AlbumModel = (0, mongoose_1.model)('Albums', AlbumSchema);
exports.default = AlbumModel;
