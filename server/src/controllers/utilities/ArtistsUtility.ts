import { Document } from "mongoose";
import ArtistModel from "../../schemas/Artists";
import { ArtistsInterface } from "../../schemas/interfaces";
import trycatch from "../../helpers/trycatch";
import CustomizedError from "../../helpers/ErrorHandler";

class ArtistsUtility{
    private static IsArtistType(artist: Document | ArtistsInterface | null | unknown): artist is Document{
        return (artist as Document<unknown,{},ArtistsInterface>).id !== undefined;
    }
    public static async GetArtistsByUsernames(usernames: string[]):Promise<Document[] | Error>{
        const artists: Document[]  = [];
        // @Expect Error
        const {data: fetchedArtists, err: errFetchingArtists} = await trycatch<Document[] | ArtistsInterface[]>(() => usernames.forEach(async(username) => {
            const artist = await ArtistModel.find({username: username}).exec();
            if(ArtistsUtility.IsArtistType(artist)){
                return artists.push(artist);
            }
            throw new CustomizedError({code: 404, message: `Error the following artist does not exist ${username}`});
        }))
        if(errFetchingArtists) throw new CustomizedError({code: 500, message: "Error while fetching artist details"});
        return artists
    
    }
    public static async GetArtistByUsername(username: string){
        const {data:artist, err:getErr } = await trycatch<Document | ArtistsInterface>(() => ArtistModel.findOne({username: username}));
        if(getErr) throw new CustomizedError({code: 500, message: "Error while fetching artist details"});
        return artist
    }
    public static async CheckIfArtistExists(username: string): Promise<boolean | Error>{
        const {data: artist, err: errFetchingArtist} = await trycatch<Document | ArtistsInterface>(() => ArtistModel.findOne({username: username}).exec());
        if(errFetchingArtist) throw new CustomizedError({code: 500, message: "Error while validating artist"});
        return true;
    }
    public static async CreateArtistIfNotAvailable(artistInfo: ArtistsInterface){
        const {data: newArtist, err: errCreatingArtist} = await trycatch<Document | ArtistsInterface>(() => ArtistModel.create(artistInfo));
        if(errCreatingArtist) throw new CustomizedError({code: 500, message: "Error while creating user"});
        if(ArtistsUtility.IsArtistType(newArtist)) return newArtist;
        throw new CustomizedError({code: 500, message:"Artist is not valid"});
    }
}

export default ArtistsUtility