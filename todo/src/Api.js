const ApiCaller = ()=>{
    return fetch("https://api.sampleapis.com/coffee/hot").then(
        (resp)=>{
            return resp.json();
        },
        (error)=>{
            return new Error("Invalid Response");
        }
    )
}

export {ApiCaller};