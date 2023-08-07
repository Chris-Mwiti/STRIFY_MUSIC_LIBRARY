import { Schema,model } from "mongoose";
import { SongsInterface } from "./interfaces";

const SongsSchema = new Schema<SongsInterface>({
    name:{
        type: String,
        required: true
    },
    artists:[
        {
            type: Schema.Types.ObjectId,
            ref: 'Artists',
            required: true
        }
    ],
    genre: {
        type: String,
        required: true
    },
    duration:{
        type: String,
        required: true
    },
    label:[
        {
            type: Schema.Types.ObjectId,
            ref: 'Record_Labels',
            required: true
        }
    ],
    file_path:{
        type: String,
        required: true
    },
    art_path:{
        type:String
    }
}, {timestamps: true})

const SongsModel = model<SongsInterface>('Songs', SongsSchema);

const SongsSchemaProtoType = {
    name:{
        type: String,
        required: true
    },
    artists:{
        type: [String || Number] || String || Number,
        required: true
    },
    genre: {
        type: String,
        required: true
    },
    duration:{
        type: String,
        required: true
    },
    label:{
        type: String,
        required: true
    },
    createdAt:{
        type: Date,
        default: Date.now
    }, 
    modifiedAt:{
        type: Date
    }
}

export {SongsModel, SongsSchemaProtoType};