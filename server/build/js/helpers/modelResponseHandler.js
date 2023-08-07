"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ResponseHandlers {
    constructor(data, res) {
        this.data = data;
        this.res = res;
        this.data = data,
            this.res = res;
    }
    postResponse() {
        if (this.data == null) {
            return this.res.status(500).json({ err: "Error while posting user" });
        }
        return this.res.status(201).json({ msg: `Successful creation`, data: this.data });
    }
    getResponse() {
        if (this.data == null) {
            return this.res.status(200).json({ msg: "The data provide does not exist in the database" });
        }
        return this.res.status(200).json({ msg: "Success", data: this.data });
    }
    updateRespose() {
        if (this.data == null) {
            return this.res.status(500).json({ err: "The data provided does not exist in the database" });
        }
        return this.res.status(200).json({ msg: "Success", data: this.data });
    }
}
exports.default = ResponseHandlers;
