import { Schema,model } from "mongoose";
import { RecordLabelInterface } from "./interfaces";

const RecordLabelSchema = new Schema<RecordLabelInterface>({
    name:{
        type: String,
        required: true,
        unique: true
    },
    location:{
        type: String,
        required: true
    },
    directorsName:{
        type:[String],
        required: true
    }
}, {timestamps: true})

const RecordModel = model<RecordLabelInterface>('Record_Labels', RecordLabelSchema);

export default RecordModel