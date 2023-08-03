async function trycatch<DataType>(func: Function){
    let data = null;
    let err = null;
    try{
        const result:DataType = await func();
        data = result;
    }catch(error){
        console.log(err);
        err = error
    }

    return {data,err}
}