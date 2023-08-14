"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const multer_1 = __importDefault(require("multer"));
const SongUploader_1 = __importDefault(require("../controllers/utilities/SongUploader"));
const uploader = (folder) => {
    const { filterOptions, storage } = (0, SongUploader_1.default)(folder);
    const upload = (0, multer_1.default)({
        storage: storage,
        fileFilter: filterOptions
    });
    return upload;
};
exports.default = uploader;
