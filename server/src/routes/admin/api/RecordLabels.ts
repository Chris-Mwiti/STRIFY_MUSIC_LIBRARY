import { Router } from "express";
import LabelController from "../../../controllers/LabelsController";
const router = Router();

router.route('/')
    .post(async(req,res) => {
        const recordLabelController = new LabelController(req,res);
        await recordLabelController.createRecordLabel();
    })
    .get(async(req,res) => {
        const recordLabelController =  new LabelController(req,res);
        await recordLabelController.getRecordLabels();
    })

router.route('/:name')
    .get(async(req,res) => {
        const recordLabelController = new LabelController(req,res);
        await recordLabelController.getRecordLabel();
    })

export {router as RecordLabelRouter}