import {Schema, model} from 'mongoose';
import { GenreInterface } from './interfaces';

const GenresSchema = new Schema<GenreInterface>({
    genre:{
        type: String,
        required: true
    }
}, {timestamps: true})

const GenresModel = model<GenreInterface>('Genres', GenresSchema);

export default GenresModel