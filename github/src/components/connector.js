import axios from "axios";

async function connect(method, url){
    try{
        return await axios.request(url,{method:method});
    }
    catch(error){
        return error;
    }
    
}   

export default connect;