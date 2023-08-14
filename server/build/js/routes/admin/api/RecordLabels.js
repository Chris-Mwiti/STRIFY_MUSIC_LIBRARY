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
exports.RecordLabelRouter = void 0;
const express_1 = require("express");
const LabelsController_1 = __importDefault(require("../../../controllers/LabelsController"));
const router = (0, express_1.Router)();
exports.RecordLabelRouter = router;
router.route('/')
    .post((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const recordLabelController = new LabelsController_1.default(req, res);
    yield recordLabelController.createRecordLabel();
}))
    .get((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const recordLabelController = new LabelsController_1.default(req, res);
    yield recordLabelController.getRecordLabels();
}));
router.route('/:name')
    .get((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const recordLabelController = new LabelsController_1.default(req, res);
    yield recordLabelController.getRecordLabel();
}));
