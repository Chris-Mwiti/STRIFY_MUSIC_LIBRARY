import CustomizedError from "../../helpers/ErrorHandler";
import trycatch from "../../helpers/trycatch";
import RecordModel from "../../schemas/Records";

class RecordLabelsUtilty{
    private static async CheckIfRecordLabelExits(label: string){
        const {data: checkRes, err: checkErr} = await trycatch<Document>(() =>  RecordModel.findOne({name: label}).exec());
        if(checkErr) throw new CustomizedError({code: 500, message:"Error while checking record label"});
        if(!checkRes) return false;
        return true
    }

    public static async FetchRecordLabelsInfo(label: string){
        const {data: isLabelAvailable, err: checkErr} = await trycatch<boolean>(() => RecordLabelsUtilty.CheckIfRecordLabelExits(label));
        if(checkErr) throw new CustomizedError({code: 500, message: "Error while checking record label"});
        if(!isLabelAvailable) throw new CustomizedError({code: 404, message: "Record Label could not be found"});

        const {data: fetchRes, err: fetchErr} = await trycatch<Document>(() => RecordModel.findOne({name: label}).exec());
        if(fetchErr) throw new CustomizedError({code: 500, message: "Error while feching record label details"});
        return fetchRes
    }
}

export default RecordLabelsUtilty