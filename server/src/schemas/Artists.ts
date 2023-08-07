import { Schema, model} from 'mongoose';
import { ArtistsInterface } from './interfaces';


const ArtistsShema = new Schema<ArtistsInterface>({
    name:{
        type: String,
        required: true
    },
    username:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true,
        validate:{
            validator:(email:string) => email.includes('@') && email.includes('.'),
            message: ({value}) => `${value} is not a valid email`
        }
    },
    phone:{
        type: String,
        required: true,
        unique: true,
        validate:{
            validator:(phone: string) => phone.length == 10,
            message: ({value}) => `${value} is not a valid phone number`
        }
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
    }
},{timestamps: true})

const ArtistModel = model<ArtistsInterface>('Artists',ArtistsShema);

export default ArtistModel
