import { Schema,model } from "mongoose";
import { RecordLabelInterface } from "./interfaces";

const RecordLabelSchema = new Schema<RecordLabelInterface>({
    name:{
        type: String,
        required: true
    },
    location:{
        type: String,
        required: true
    },
    directorsName:{
        type:[String] || String,
        required: true
    },
    createdAt:{
        type:Date,
        default: Date.now
    },
    modifiedAt:{
        type: Date
    }
})

const RecordModel = model<RecordLabelInterface>('Record_Labels', RecordLabelSchema);

export default RecordModel