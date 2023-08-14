import ResponseHandlers from "../helpers/modelResponseHandler";
import trycatch from "../helpers/trycatch";
import ArtistModel from "../schemas/Artists";
import { ArtistsInterface } from "../schemas/interfaces";
import { Request, Response } from "express";
import { ObjectId } from "mongodb";

class ArtistsController{
    private artistsModel = ArtistModel;
    constructor(
        private req:Request,
        private res:Response,
    ){
        this.req = req,
        this.res = res
    }

    public async createArtist(){
        const reqBody:ArtistsInterface = this.req.body;
        const artist = new this.artistsModel(reqBody);
        const {data:artistRes, err: postArtistErr}= await trycatch<ArtistsInterface>(() => artist.save());
        if(postArtistErr) return this.res.status(500).json({err:"Error while trying to create user"});
        console.log(artistRes);
        new ResponseHandlers<ArtistsInterface|null>(artistRes,this.res).postResponse();
    }

    public async getArtists(){
        const {data: artists, err: errGettingArtists} = await trycatch<ArtistsInterface[]>(() => ArtistModel.find());
        if(errGettingArtists) return this.res.status(500).json({err: "Error while fetching artists"});
        new ResponseHandlers<ArtistsInterface[] | null >(artists,this.res).getResponse();
    }

    public async getArtist(){
        const {id: artistsId} = this.req.params
        const {data: artist, err: getErr} = await trycatch<ArtistsInterface>(() => ArtistModel.findById({_id: new ObjectId(artistsId)}));
        if(getErr) return this.res.status(500).json({err: "Error while fetching artist"});
        new ResponseHandlers<ArtistsInterface | null>(artist,this.res).getResponse();
    }

    public async updateArtists(){
        const {id: artistId} = this.req.params
        const reqBody:ArtistsInterface | {} = this.req.body
        const  updatedPersonQuery = await this.artistsModel.findByIdAndUpdate(new ObjectId(artistId),reqBody,{returnDocument:"after"}).exec();
        const {data: updateRes, err: updatingErr } = await trycatch<ArtistsInterface>(() => updatedPersonQuery?.save());
        if(updatingErr) return this.res.status(500).json({err: "The artist you are trying to update does not exist"});
        new ResponseHandlers<ArtistsInterface | null>(updateRes,this.res).updateRespose();
    }


    // @TODO: Update the controller such when one deletes a user documents it deletes every subdocument associated with it
    public async deleteArtist(){
        const {id: artistId} = this.req.params;
        const deletedPersonQuery = await this.artistsModel.findByIdAndDelete(artistId,{returnDocument: "before"}).exec();
        const {data: deleteRes, err: deletingErr} = await trycatch<ArtistsInterface>(() => deletedPersonQuery?.save());
        if(deletingErr) return this.res.status(500).json({err: "The artist you are trying to delete does not exist"});
        new ResponseHandlers<ArtistsInterface | null>(deleteRes, this.res).deleteResponse();
    }

}

export default ArtistsController