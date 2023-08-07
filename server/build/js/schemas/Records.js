"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const RecordLabelSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    location: {
        type: String,
        required: true
    },
    directorsName: {
        type: [String],
        required: true
    }
}, { timestamps: true });
const RecordModel = (0, mongoose_1.model)('Record_Labels', RecordLabelSchema);
exports.default = RecordModel;
