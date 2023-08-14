import multer from "multer";
import fileUploadOptions from "../controllers/utilities/SongUploader";
import { DataFolders } from "../controllers/utilities/SongUploader";

const uploader = (folder: DataFolders) => {
    const {filterOptions, storage} = fileUploadOptions(folder);
    const upload = multer({
        storage: storage,
        fileFilter: filterOptions
    })
    return upload
}

export default uploader