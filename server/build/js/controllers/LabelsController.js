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
const trycatch_1 = __importDefault(require("../helpers/trycatch"));
const Records_1 = __importDefault(require("../schemas/Records"));
const modelResponseHandler_1 = __importDefault(require("../helpers/modelResponseHandler"));
const RecordLabelsUtility_1 = __importDefault(require("./utilities/RecordLabelsUtility"));
const ErrorHandler_1 = require("../helpers/ErrorHandler");
class LabelController {
    constructor(req, res) {
        this.req = req;
        this.res = res;
        this.req = req;
        this.res = res;
    }
    createRecordLabel() {
        return __awaiter(this, void 0, void 0, function* () {
            const { name, location, directorsName } = this.req.body;
            const { data: newRecordLabel, err: postingErr } = yield (0, trycatch_1.default)(() => Records_1.default.create({ name, location, directorsName }));
            if (postingErr)
                return (0, ErrorHandler_1.checkErrProperties)(this.res, postingErr);
            new modelResponseHandler_1.default(newRecordLabel, this.res).postResponse();
        });
    }
    getRecordLabel() {
        return __awaiter(this, void 0, void 0, function* () {
            const { name } = this.req.params;
            const { data: labelInfo, err: fetchErr } = yield (0, trycatch_1.default)(() => RecordLabelsUtility_1.default.FetchRecordLabelsInfo(name));
            if (fetchErr)
                return (0, ErrorHandler_1.checkErrProperties)(this.res, fetchErr);
            new modelResponseHandler_1.default(labelInfo, this.res).getResponse();
        });
    }
    getRecordLabels() {
        return __awaiter(this, void 0, void 0, function* () {
            const { data: labelsInfo, err: fetchErr } = yield (0, trycatch_1.default)(() => Records_1.default.find().exec());
            if (fetchErr)
                return (0, ErrorHandler_1.checkErrProperties)(this.res, fetchErr);
            new modelResponseHandler_1.default(labelsInfo, this.res);
        });
    }
}
exports.default = LabelController;
