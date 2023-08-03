import {Schema, model} from 'mongoose';
import { GenreInterface } from './interfaces';

const GenresSchema = new Schema<GenreInterface>({
    genre:{
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
})

const GenresModel = model<GenreInterface>('Genres', GenresSchema);

export default GenresModel