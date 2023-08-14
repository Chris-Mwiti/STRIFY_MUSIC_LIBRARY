import { Request } from 'express';
import multer from 'multer'
import CustomizedError from '../../helpers/ErrorHandler';
export type DataFolders = "songs" | "albums" | "playlists"

const fileUploadOptions = (folder: DataFolders) => {
    const storage = multer.diskStorage({
        destination(req, file, callback) {
            callback(null, `server/src/data/${folder}`);
        },
        filename(req,file,callback){
            const ext:string = file.mimetype.split("/")[1];
            console.log(file);
            const filename = `${folder}-${Date.now()}-${file.originalname.split(".")[0]}.${ext}`;
            console.log(filename);
            callback(null,filename);
        }
    })

    const filterOptions = (req: Request,file:Express.Multer.File ,callback: Function) => {
        const ext = file.mimetype.split("/")[1];
        console.log(ext);
        const acceptableExtTypes = ["mp3", "mp4", "mpeg"];
        if(acceptableExtTypes.includes(ext)){
            const {size} = file
            if(size > 20) return callback(new CustomizedError({code: 400, message: "File size is too big"}),false);
            return callback(null,true)
        }
        return callback(new CustomizedError({code: 400, message: "File type is not acceptable"}), false);
    }

    return {storage,filterOptions}
}

export default fileUploadOptions