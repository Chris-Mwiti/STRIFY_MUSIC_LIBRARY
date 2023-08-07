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
exports.ArtistRouter = void 0;
const express_1 = require("express");
const ArtistsController_1 = __importDefault(require("../../../controllers/ArtistsController"));
const router = (0, express_1.Router)();
exports.ArtistRouter = router;
router.route('/')
    .get((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const artistController = new ArtistsController_1.default(req, res);
    yield artistController.getArtists();
}))
    .post((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const artistController = new ArtistsController_1.default(req, res);
    yield artistController.createArtist();
}));
router.route('/:id')
    .get((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const artistController = new ArtistsController_1.default(req, res);
    yield artistController.getArtist();
}))
    .put((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const artistController = new ArtistsController_1.default(req, res);
    yield artistController.updateArtists();
}))
    .delete((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const artistController = new ArtistsController_1.default(req, res);
    yield artistController.deleteArtist();
}));
