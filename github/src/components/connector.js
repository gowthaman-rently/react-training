import axios from "axios";

async function connect(method, url){
    try{
        return await axios.request(url,{method:method, "headers" : {"Authorization": "Bearer  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", 'accept': 'application/vnd.github.VERSION.raw'}});
    }
    catch(error){
        return error;
    }
    
}   

export default connect;