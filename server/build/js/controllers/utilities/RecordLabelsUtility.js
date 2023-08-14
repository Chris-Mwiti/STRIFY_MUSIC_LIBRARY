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
const ErrorHandler_1 = __importDefault(require("../../helpers/ErrorHandler"));
const trycatch_1 = __importDefault(require("../../helpers/trycatch"));
const Records_1 = __importDefault(require("../../schemas/Records"));
class RecordLabelsUtilty {
    static CheckIfRecordLabelExits(label) {
        return __awaiter(this, void 0, void 0, function* () {
            const { data: checkRes, err: checkErr } = yield (0, trycatch_1.default)(() => Records_1.default.findOne({ name: label }).exec());
            if (checkErr)
                throw new ErrorHandler_1.default({ code: 500, message: "Error while checking record label" });
            if (!checkRes)
                return false;
            return true;
        });
    }
    static FetchRecordLabelsInfo(label) {
        return __awaiter(this, void 0, void 0, function* () {
            const { data: isLabelAvailable, err: checkErr } = yield (0, trycatch_1.default)(() => RecordLabelsUtilty.CheckIfRecordLabelExits(label));
            if (checkErr)
                throw new ErrorHandler_1.default({ code: 500, message: "Error while checking record label" });
            if (!isLabelAvailable)
                throw new ErrorHandler_1.default({ code: 404, message: "Record Label could not be found" });
            const { data: fetchRes, err: fetchErr } = yield (0, trycatch_1.default)(() => Records_1.default.findOne({ name: label }).exec());
            if (fetchErr)
                throw new ErrorHandler_1.default({ code: 500, message: "Error while feching record label details" });
            return fetchRes;
        });
    }
}
exports.default = RecordLabelsUtilty;
