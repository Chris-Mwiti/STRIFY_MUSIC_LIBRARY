import { Schema, model } from "mongoose";
import { AlbumInterface, SongsInterface } from "./interfaces";
import { SongsSchemaProtoType } from "./Songs";

const AlbumSchema = new Schema<AlbumInterface>({
  name: {
    type: String,
    required: true,
  },
  artists:[
    {
      type: [Schema.Types.ObjectId],
      ref: 'Artists',
      required: true
    }
  ],
  genre: [
    {
      type: [Schema.Types.ObjectId],
      ref: 'Genres',
      required: true
    }
  ],
  duration: {
    type: String,
    required: true,
  },
  songs: {
    type: [SongsSchemaProtoType],
    required: true
  },
  file_path:{
    type: String,
    required: true
  },
  art_path:{
    type: String
  }
}, {timestamps: true});

const AlbumModel = model<AlbumInterface>('Albums', AlbumSchema);


export default AlbumModel
