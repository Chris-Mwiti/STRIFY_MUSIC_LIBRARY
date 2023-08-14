import { Request } from 'express'
import ArtistsUtility from './ArtistsUtility';
import trycatch from '../../helpers/trycatch';
import { ArtistsInterface } from '../../schemas/interfaces';
import { Document } from 'mongoose';
import RecordLabelsUtilty from './RecordLabelsUtility';
import CustomizedError from '../../helpers/ErrorHandler';

class SongsUtility{
    public static async ModifySongInfoProperties(req: Request) {
        const {name,artist,genre,duration,label} = req.body;
        const filename = req?.file?.filename;
        if(!filename) throw new CustomizedError({code: 400, message: "Missing file field"});

        // Mapping of existing artists to songs
        const {data: isArtistAvailable, err: errDuringValidation} = await trycatch<boolean>(() => ArtistsUtility.CheckIfArtistExists(artist));
        if(errDuringValidation) throw new CustomizedError({code:500, message: "Error while validating artist info" });
        if(!isArtistAvailable) throw new CustomizedError({code: 400, message: "Artist could not be found!!"});
        console.log(artist);
        const {data: fetchedArtist, err: errFetchingArtist} = await trycatch<Document>(() => ArtistsUtility.GetArtistByUsername(artist));
        if(errFetchingArtist) throw new CustomizedError({code: 500,message: "Error while fetching artist"});
        if(!fetchedArtist) throw new CustomizedError({code: 400, message: "Artist could not be found"});

        // Mapping of existing Record Labels to songs
        const {data: recordLabelInfo, err: fetchErr} = await trycatch<Document>(() => RecordLabelsUtilty.FetchRecordLabelsInfo(label));
        if(fetchErr) throw new CustomizedError({code: 500, message: "Error while record label info"});
        if(!recordLabelInfo) throw new CustomizedError({code: 400, message: "Record Label could not be found"});

        return {
            name: name,
            artists: fetchedArtist.id,
            genre: genre,
            duration: duration,
            file_path: filename,
            label: recordLabelInfo.id
        
        }
    }
}

export default SongsUtility