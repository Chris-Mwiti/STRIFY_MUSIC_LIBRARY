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
const ErrorHandler_1 = __importDefault(require("./ErrorHandler"));
function trycatch(func) {
    return __awaiter(this, void 0, void 0, function* () {
        let data = null;
        let err = null;
        try {
            const result = yield func();
            data = result;
        }
        catch (error) {
            console.log(error);
            if (error instanceof ErrorHandler_1.default) {
                err = {
                    code: error.code,
                    message: error.message
                };
            }
            else {
                err = "Unexpected Error Occured";
            }
        }
        return { data, err };
    });
}
exports.default = trycatch;
