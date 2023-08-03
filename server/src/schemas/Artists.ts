import { Schema, model} from 'mongoose';
import { ArtistsInterface } from './interfaces';

const ArtistsShema = new Schema<ArtistsInterface>({
    name:{
        type: String,
        required: true
    },
    username:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    phone:{
        type: String,
        required: true
    },
    age:{
        type: Number,
        required: true
    },
    label:{
        type: String,
        required: true
    },
    bio:{
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    modifiedAt:{
        type: Date
    }
})

const ArtistModel = model<ArtistsInterface>('Artists',ArtistsShema);

export default ArtistModel
