"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SongsSchemaProtoType = exports.SongsModel = void 0;
const mongoose_1 = require("mongoose");
const SongsSchema = new mongoose_1.Schema({
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
});
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
