import { Schema, model } from "mongoose";
import { AlbumInterface, SongsInterface } from "./interfaces";
import { SongsSchemaProtoType } from "./Songs";

const AlbumSchema = new Schema<AlbumInterface>({
  name: {
    type: String,
    required: true,
  },
  artists: {
    type: [String || Number] || String || Number,
    required: true,
  },
  genre: {
    type: String,
    required: true,
  },
  duration: {
    type: String,
    required: true,
  },
  songs: {
    type: [SongsSchemaProtoType],
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  modifiedAt:{
    type: Date
  }
});

const AlbumModel = model<AlbumInterface>('Albums', AlbumSchema);


export default AlbumModel
