import { Router, Request, Response } from "express";
import ArtistsController from "../../../controllers/ArtistsController";
const router = Router();

router.route('/')
    .get(async(req: Request,res: Response) => {
        const artistController = new ArtistsController(req,res);
        await artistController.getArtists();
    })
    .post(async(req: Request, res: Response) => {
        const artistController = new ArtistsController(req,res);
        await artistController.createArtist();
    })
router.route('/:id')
    .get(async(req,res) => {
        const artistController = new ArtistsController(req,res);
        await artistController.getArtist();
    })
    .put(async(req,res) => {
        const artistController = new ArtistsController(req,res);
        await artistController.updateArtists();
    })
    .delete(async(req,res) => {
        const artistController = new ArtistsController(req,res);
        await artistController.deleteArtist();
    })

export {router as ArtistRouter}