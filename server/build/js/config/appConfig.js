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
Object.defineProperty(exports, "__esModule", { value: true });
function appConfig(app, mongoose) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield mongoose
                .connect('mongodb+srv://ChrisMwiti:P8LrLTTPci5nnZcU@cluster0.ax7kkcq.mongodb.net/?retryWrites=true&w=majority')
                .then(() => {
                app.listen(process.env.PORT, () => {
                    console.log("Server is up and ruuning");
                });
            });
        }
        catch (err) {
            console.error(err);
            throw err;
        }
    });
}
exports.default = appConfig;
