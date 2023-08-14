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
const modelResponseHandler_1 = __importDefault(require("../helpers/modelResponseHandler"));
const trycatch_1 = __importDefault(require("../helpers/trycatch"));
const Artists_1 = __importDefault(require("../schemas/Artists"));
const mongodb_1 = require("mongodb");
class ArtistsController {
    constructor(req, res) {
        this.req = req;
        this.res = res;
        this.artistsModel = Artists_1.default;
        this.req = req,
            this.res = res;
    }
    createArtist() {
        return __awaiter(this, void 0, void 0, function* () {
            const reqBody = this.req.body;
            const artist = new this.artistsModel(reqBody);
            const { data: artistRes, err: postArtistErr } = yield (0, trycatch_1.default)(() => artist.save());
            if (postArtistErr)
                return this.res.status(500).json({ err: "Error while trying to create user" });
            console.log(artistRes);
            new modelResponseHandler_1.default(artistRes, this.res).postResponse();
        });
    }
    getArtists() {
        return __awaiter(this, void 0, void 0, function* () {
            const { data: artists, err: errGettingArtists } = yield (0, trycatch_1.default)(() => Artists_1.default.find());
            if (errGettingArtists)
                return this.res.status(500).json({ err: "Error while fetching artists" });
            new modelResponseHandler_1.default(artists, this.res).getResponse();
        });
    }
    getArtist() {
        return __awaiter(this, void 0, void 0, function* () {
            const { id: artistsId } = this.req.params;
            const { data: artist, err: getErr } = yield (0, trycatch_1.default)(() => Artists_1.default.findById({ _id: new mongodb_1.ObjectId(artistsId) }));
            if (getErr)
                return this.res.status(500).json({ err: "Error while fetching artist" });
            new modelResponseHandler_1.default(artist, this.res).getResponse();
        });
    }
    updateArtists() {
        return __awaiter(this, void 0, void 0, function* () {
            const { id: artistId } = this.req.params;
            const reqBody = this.req.body;
            const updatedPersonQuery = yield this.artistsModel.findByIdAndUpdate(new mongodb_1.ObjectId(artistId), reqBody, { returnDocument: "after" }).exec();
            const { data: updateRes, err: updatingErr } = yield (0, trycatch_1.default)(() => updatedPersonQuery === null || updatedPersonQuery === void 0 ? void 0 : updatedPersonQuery.save());
            if (updatingErr)
                return this.res.status(500).json({ err: "The artist you are trying to update does not exist" });
            new modelResponseHandler_1.default(updateRes, this.res).updateRespose();
        });
    }
    // @TODO: Update the controller such when one deletes a user documents it deletes every subdocument associated with it
    deleteArtist() {
        return __awaiter(this, void 0, void 0, function* () {
            const { id: artistId } = this.req.params;
            const deletedPersonQuery = yield this.artistsModel.findByIdAndDelete(artistId, { returnDocument: "before" }).exec();
            const { data: deleteRes, err: deletingErr } = yield (0, trycatch_1.default)(() => deletedPersonQuery === null || deletedPersonQuery === void 0 ? void 0 : deletedPersonQuery.save());
            if (deletingErr)
                return this.res.status(500).json({ err: "The artist you are trying to delete does not exist" });
            new modelResponseHandler_1.default(deleteRes, this.res).deleteResponse();
        });
    }
}
exports.default = ArtistsController;
