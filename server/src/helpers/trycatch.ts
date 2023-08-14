import CustomizedError, { CustomizedErrorInterface } from "./ErrorHandler";

async function trycatch<DataType>(func: Function){
    let data = null;
    let err = null;
    try{
        const result:DataType = await func();
        data = result;
    }catch(error){
        console.log(error);
        if(error instanceof CustomizedError){
            err = {
                code: error.code,
                message: error.message
            } 
        }else{
            err = "Unexpected Error Occured";
        }
    }

    return {data,err}
}

export default trycatch