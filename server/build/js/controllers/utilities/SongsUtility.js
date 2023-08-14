"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ArtistsUtility_1 = __importDefault(require("./ArtistsUtility"));
const trycatch_1 = __importDefault(require("../../helpers/trycatch"));
const RecordLabelsUtility_1 = __importDefault(require("./RecordLabelsUtility"));
const ErrorHandler_1 = __importDefault(require("../../helpers/ErrorHandler"));
class SongsUtility {
    static ModifySongInfoProperties(req) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const { name, artist, genre, duration, label } = req.body;
            const filename = (_a = req === null || req === void 0 ? void 0 : req.file) === null || _a === void 0 ? void 0 : _a.filename;
            if (!filename)
                throw new ErrorHandler_1.default({ code: 400, message: "Missing file field" });
            // Mapping of existing artists to songs
            const { data: isArtistAvailable, err: errDuringValidation } = yield (0, trycatch_1.default)(() => ArtistsUtility_1.default.CheckIfArtistExists(artist));
            if (errDuringValidation)
                throw new ErrorHandler_1.default({ code: 500, message: "Error while validating artist info" });
            if (!isArtistAvailable)
                throw new ErrorHandler_1.default({ code: 400, message: "Artist could not be found!!" });
            console.log(artist);
            const { data: fetchedArtist, err: errFetchingArtist } = yield (0, trycatch_1.default)(() => ArtistsUtility_1.default.GetArtistByUsername(artist));
            if (errFetchingArtist)
                throw new ErrorHandler_1.default({ code: 500, message: "Error while fetching artist" });
            if (!fetchedArtist)
                throw new ErrorHandler_1.default({ code: 400, message: "Artist could not be found" });
            // Mapping of existing Record Labels to songs
            const { data: recordLabelInfo, err: fetchErr } = yield (0, trycatch_1.default)(() => RecordLabelsUtility_1.default.FetchRecordLabelsInfo(label));
            if (fetchErr)
                throw new ErrorHandler_1.default({ code: 500, message: "Error while record label info" });
            if (!recordLabelInfo)
                throw new ErrorHandler_1.default({ code: 400, message: "Record Label could not be found" });
            return {
                name: name,
                artists: fetchedArtist.id,
                genre: genre,
                duration: duration,
                file_path: filename,
                label: recordLabelInfo.id
            };
        });
    }
}
exports.default = SongsUtility;
