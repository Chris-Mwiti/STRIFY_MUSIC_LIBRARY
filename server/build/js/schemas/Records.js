"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const RecordLabelSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    directorsName: {
        type: [String] || String,
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
const RecordModel = (0, mongoose_1.model)('Record_Labels', RecordLabelSchema);
exports.default = RecordModel;
