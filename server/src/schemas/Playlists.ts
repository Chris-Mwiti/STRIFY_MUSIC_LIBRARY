import { Schema, model } from "mongoose";
import { PlaylistInterface } from "./interfaces";
import { SongsSchemaProtoType } from "./Songs";

const PlayListSchema = new Schema<PlaylistInterface>({
    name:{
        type: String,
        required: true
    },
    duration:{
        type: String,
        required: true
    },
    description:{
        type: String
    },
    songs:{
        type:[SongsSchemaProtoType],
        required: true
    }
}, {timestamps: true})

const PlayListModel = model<PlaylistInterface>('Playlists', PlayListSchema);

export default PlayListModel;