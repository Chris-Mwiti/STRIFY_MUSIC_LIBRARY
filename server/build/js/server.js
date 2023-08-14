"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const appConfig_1 = __importDefault(require("./config/appConfig"));
const Artists_1 = require("./routes/admin/api/Artists");
const Songs_1 = require("./routes/Artists/api/Songs");
const RecordLabels_1 = require("./routes/admin/api/RecordLabels");
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
// Middlewares
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
const whiteListedNetworks = ["http://localhost:5500", "http://localhost:5173"];
app.use((0, cors_1.default)({
    origin: (origin, callback) => {
        if (whiteListedNetworks.indexOf(origin) !== -1 || !origin) {
            return callback(null, true);
        }
        return callback(new Error("Origin request not found in the whitelisted networks"), false);
    },
    credentials: true
}));
// Routes
// Admin
app.use('/admin/api/artists', Artists_1.ArtistRouter);
app.use('/artist/api/songs', Songs_1.ArtistsSongsRouter);
app.use('/admin/api/labels', RecordLabels_1.RecordLabelRouter);
// @TODO: check on how to store env varialble with escape characters
(0, appConfig_1.default)(app, mongoose_1.default);
