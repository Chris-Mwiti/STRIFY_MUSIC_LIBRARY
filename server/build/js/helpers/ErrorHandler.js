"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkErrProperties = void 0;
class CustomizedError extends Error {
    constructor({ code, message }) {
        super(message);
        this.code = code;
        this.name = "CustomizedError";
    }
}
function checkErrProperties(res, err) {
    if (typeof err == "object" && "code" in err && "message" in err) {
        return res.status(err.code).json({ err: err.message });
    }
    else if (err instanceof Error) {
        return res.status(500).json({ err: err.message });
    }
    else {
        return res.status(500).json({ err: err });
    }
}
exports.checkErrProperties = checkErrProperties;
exports.default = CustomizedError;
