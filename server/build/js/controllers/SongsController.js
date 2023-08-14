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
const Songs_1 = require("../schemas/Songs");
const trycatch_1 = __importDefault(require("../helpers/trycatch"));
const modelResponseHandler_1 = __importDefault(require("../helpers/modelResponseHandler"));
const SongsUtility_1 = __importDefault(require("./utilities/SongsUtility"));
const ErrorHandler_1 = require("../helpers/ErrorHandler");
class SongsController {
    constructor(req, res) {
        this.req = req;
        this.res = res;
        (this.req = req), (this.res = res);
    }
    addSong() {
        return __awaiter(this, void 0, void 0, function* () {
            const { data: songInfo, err: fetchErr } = yield (0, trycatch_1.default)(() => SongsUtility_1.default.ModifySongInfoProperties(this.req));
            if (fetchErr)
                return (0, ErrorHandler_1.checkErrProperties)(this.res, fetchErr);
            const { data: postRes, err: postErr } = yield (0, trycatch_1.default)(() => Songs_1.SongsModel.create(songInfo));
            if (postErr)
                return (0, ErrorHandler_1.checkErrProperties)(this.res, postErr);
            new modelResponseHandler_1.default(postRes, this.res).postResponse();
        });
    }
}
exports.default = SongsController;
