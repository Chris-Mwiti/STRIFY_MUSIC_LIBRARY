"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const multer_1 = __importDefault(require("multer"));
const ErrorHandler_1 = __importDefault(require("../../helpers/ErrorHandler"));
const fileUploadOptions = (folder) => {
    const storage = multer_1.default.diskStorage({
        destination(req, file, callback) {
            callback(null, `server/src/data/${folder}`);
        },
        filename(req, file, callback) {
            const ext = file.mimetype.split("/")[1];
            console.log(file);
            const filename = `${folder}-${Date.now()}-${file.originalname.split(".")[0]}.${ext}`;
            console.log(filename);
            callback(null, filename);
        }
    });
    const filterOptions = (req, file, callback) => {
        const ext = file.mimetype.split("/")[1];
        console.log(ext);
        const acceptableExtTypes = ["mp3", "mp4", "mpeg"];
        if (acceptableExtTypes.includes(ext)) {
            const { size } = file;
            if (size > 20)
                return callback(new ErrorHandler_1.default({ code: 400, message: "File size is too big" }), false);
            return callback(null, true);
        }
        return callback(new ErrorHandler_1.default({ code: 400, message: "File type is not acceptable" }), false);
    };
    return { storage, filterOptions };
};
exports.default = fileUploadOptions;
