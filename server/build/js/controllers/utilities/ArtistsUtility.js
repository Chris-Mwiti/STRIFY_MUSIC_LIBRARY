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
const Artists_1 = __importDefault(require("../../schemas/Artists"));
const trycatch_1 = __importDefault(require("../../helpers/trycatch"));
const ErrorHandler_1 = __importDefault(require("../../helpers/ErrorHandler"));
class ArtistsUtility {
    static IsArtistType(artist) {
        return artist.id !== undefined;
    }
    static GetArtistsByUsernames(usernames) {
        return __awaiter(this, void 0, void 0, function* () {
            const artists = [];
            // @Expect Error
            const { data: fetchedArtists, err: errFetchingArtists } = yield (0, trycatch_1.default)(() => usernames.forEach((username) => __awaiter(this, void 0, void 0, function* () {
                const artist = yield Artists_1.default.find({ username: username }).exec();
                if (ArtistsUtility.IsArtistType(artist)) {
                    return artists.push(artist);
                }
                throw new ErrorHandler_1.default({ code: 404, message: `Error the following artist does not exist ${username}` });
            })));
            if (errFetchingArtists)
                throw new ErrorHandler_1.default({ code: 500, message: "Error while fetching artist details" });
            return artists;
        });
    }
    static GetArtistByUsername(username) {
        return __awaiter(this, void 0, void 0, function* () {
            const { data: artist, err: getErr } = yield (0, trycatch_1.default)(() => Artists_1.default.findOne({ username: username }));
            if (getErr)
                throw new ErrorHandler_1.default({ code: 500, message: "Error while fetching artist details" });
            return artist;
        });
    }
    static CheckIfArtistExists(username) {
        return __awaiter(this, void 0, void 0, function* () {
            const { data: artist, err: errFetchingArtist } = yield (0, trycatch_1.default)(() => Artists_1.default.findOne({ username: username }).exec());
            if (errFetchingArtist)
                throw new ErrorHandler_1.default({ code: 500, message: "Error while validating artist" });
            return true;
        });
    }
    static CreateArtistIfNotAvailable(artistInfo) {
        return __awaiter(this, void 0, void 0, function* () {
            const { data: newArtist, err: errCreatingArtist } = yield (0, trycatch_1.default)(() => Artists_1.default.create(artistInfo));
            if (errCreatingArtist)
                throw new ErrorHandler_1.default({ code: 500, message: "Error while creating user" });
            if (ArtistsUtility.IsArtistType(newArtist))
                return newArtist;
            throw new ErrorHandler_1.default({ code: 500, message: "Artist is not valid" });
        });
    }
}
exports.default = ArtistsUtility;
