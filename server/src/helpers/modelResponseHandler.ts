import { Response } from "express";

class ResponseHandlers <T> {
    constructor(
        private data:T,
        private res: Response
    ){
        this.data = data,
        this.res = res
    }

    public postResponse(){
        if(this.data == null){
           return this.res.status(500).json({err: "Error while posting user"});
        }
        return this.res.status(201).json({msg: `Successful creation`, data: this.data});
    }

    public getResponse(){
        if(this.data == null){
            return this.res.status(404).json({msg: "The data provide does not exist in the database"});
        }
        return this.res.status(200).json({msg: "Success", data: this.data});
    }

    public updateRespose(){
        if(this.data == null){
            return this.res.status(404).json({err: "The data provided does not exist in the database"});
        }
        return this.res.status(200).json({msg: "Success", data: this.data});
    }

    public deleteResponse(){
        if(this.data == null){
            return this.res.status(404).json({err: "The data provided does not exist in the database"});
        }
        return this.res.status(200).json({msg: "Success", data: this.data});
    }
}

export default ResponseHandlers