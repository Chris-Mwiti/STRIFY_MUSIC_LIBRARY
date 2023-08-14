import { Router } from "express";
import SongsController from "../../../controllers/SongsController";
import uploader from "../../../middlewares/uploader";
const upload = uploader("songs")
const router = Router();

router.route('/')
    .post(upload.single('songs'),async(req,res) => {
        const songsController = new SongsController(req,res);
        songsController.addSong();
    })

export {router as ArtistsSongsRouter}