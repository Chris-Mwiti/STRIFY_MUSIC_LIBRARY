import { Response } from "express";

export interface CustomizedErrorInterface {
    code: number,
    message: string
}

class CustomizedError extends Error{
    public code: number
    constructor({code, message}: CustomizedErrorInterface){
        super(message);
        this.code = code;
        this.name = "CustomizedError"
    }
}

export function checkErrProperties(res: Response, err: CustomizedErrorInterface | string | Error){
    if(typeof err == "object" && "code" in err && "message" in err){
        return res.status(err.code).json({err: err.message});
    }
    else if(err instanceof Error){
        return res.status(500).json({err: err.message});
    }else{
        return res.status(500).json({err: err});
    }
}

export default CustomizedError