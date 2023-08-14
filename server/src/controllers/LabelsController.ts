import { Request, Response } from "express";
import trycatch from "../helpers/trycatch";
import RecordModel from "../schemas/Records";
import ResponseHandlers from "../helpers/modelResponseHandler";
import { Document } from "mongoose";
import RecordLabelsUtilty from "./utilities/RecordLabelsUtility";
import { RecordLabelInterface } from "../schemas/interfaces";
import CustomizedError, { checkErrProperties } from "../helpers/ErrorHandler";

class LabelController{
    constructor(private req: Request,private res: Response){
        this.req = req;
        this.res = res;
    }

    public async createRecordLabel(){
        const {name,location,directorsName} = this.req.body
        const {data: newRecordLabel, err: postingErr} = await trycatch<Document>(() => RecordModel.create({name,location,directorsName}));
        if(postingErr) return checkErrProperties(this.res, postingErr);
        new ResponseHandlers<Document | null>(newRecordLabel,this.res).postResponse();
    }

    public async getRecordLabel(){
        const { name } = this.req.params;
        const {data: labelInfo, err: fetchErr} = await trycatch<Document>(() => RecordLabelsUtilty.FetchRecordLabelsInfo(name));
        if(fetchErr) return checkErrProperties(this.res,fetchErr);
        new ResponseHandlers<Document | null>(labelInfo, this.res).getResponse();
    }

    public async getRecordLabels(){
        const {data: labelsInfo, err: fetchErr} = await trycatch<Document[]>(() => RecordModel.find().exec());
        if(fetchErr) return checkErrProperties(this.res, fetchErr);
        new ResponseHandlers<Document[] | null>(labelsInfo,this.res);
    }
}

export default LabelController