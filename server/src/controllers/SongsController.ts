import { Request, Response } from "express";
import { ArtistsInterface, SongsInterface } from "../schemas/interfaces";
import { SongsModel } from "../schemas/Songs";
import { Document } from "mongoose";
import trycatch from "../helpers/trycatch";
import ResponseHandlers from "../helpers/modelResponseHandler";
import ArtistsUtility from "./utilities/ArtistsUtility";
import SongsUtility from "./utilities/SongsUtility";
import { checkErrProperties } from "../helpers/ErrorHandler";
class SongsController {
  constructor(private req: Request, private res: Response) {
    (this.req = req), (this.res = res);
  }
  
  public async addSong(){
    const {data: songInfo, err: fetchErr} = await trycatch<SongsInterface>(() => SongsUtility.ModifySongInfoProperties(this.req));
    if(fetchErr) return checkErrProperties(this.res,fetchErr);
    const {data: postRes, err: postErr} = await trycatch<Document>(() => SongsModel.create(songInfo));
    if(postErr) return checkErrProperties(this.res,postErr);
    new ResponseHandlers<Document | null>(postRes,this.res).postResponse();
  }
}

export default SongsController;
