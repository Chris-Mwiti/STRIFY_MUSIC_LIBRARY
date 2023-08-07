"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const ArtistsShema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: (email) => email.includes('@') && email.includes('.'),
            message: ({ value }) => `${value} is not a valid email`
        }
    },
    phone: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: (phone) => phone.length == 10,
            message: ({ value }) => `${value} is not a valid phone number`
        }
    },
    age: {
        type: Number,
        required: true
    },
    label: {
        type: String,
        required: true
    },
    bio: {
        type: String
    }
}, { timestamps: true });
const ArtistModel = (0, mongoose_1.model)('Artists', ArtistsShema);
exports.default = ArtistModel;
