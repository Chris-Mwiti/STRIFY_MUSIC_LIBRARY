"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SongsSchemaProtoType = exports.SongsModel = void 0;
const mongoose_1 = require("mongoose");
const SongsSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true
    },
    artists: [
        {
            type: mongoose_1.Schema.Types.ObjectId,
            ref: 'Artists',
            required: true
        }
    ],
    genre: {
        type: String,
        required: true
    },
    duration: {
        type: String,
        required: true
    },
    label: [
        {
            type: mongoose_1.Schema.Types.ObjectId,
            ref: 'Record_Labels',
            required: true
        }
    ],
    file_path: {
        type: String,
        required: true
    },
    art_path: {
        type: String
    }
}, { timestamps: true });
const SongsModel = (0, mongoose_1.model)('Songs', SongsSchema);
exports.SongsModel = SongsModel;
const SongsSchemaProtoType = {
    name: {
        type: String,
        required: true
    },
    artists: {
        type: [String || Number] || String || Number,
        required: true
    },
    genre: {
        type: String,
        required: true
    },
    duration: {
        type: String,
        required: true
    },
    label: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    modifiedAt: {
        type: Date
    }
};
exports.SongsSchemaProtoType = SongsSchemaProtoType;
