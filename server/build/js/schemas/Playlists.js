"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const Songs_1 = require("./Songs");
const PlayListSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true
    },
    duration: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    songs: {
        type: [Songs_1.SongsSchemaProtoType],
        required: true
    }
}, { timestamps: true });
const PlayListModel = (0, mongoose_1.model)('Playlists', PlayListSchema);
exports.default = PlayListModel;
