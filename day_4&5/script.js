let main_input = document.getElementById("input-main");
let result_main = document.getElementById("result-main");
let timer;

async function connect(url){
    const response = await fetch(url).catch((error)=>{console.log(error)})
    return response.json();
}


function searchTimer(){
    clearTimeout(timer);
    if(main_input.value.length == 0 ){
        main_input.classList.remove("active");
        result_main.classList.remove("active");
        return 0;
    }
    main_input.classList.add("active");
    result_main.classList.add("active");
    result_main.innerHTML = `<div style="text-align:center;"> Searching...</div>`;
    timer = setTimeout(searchUser, 1000);
}

function searchUser(){
    connect(`https://api.github.com/search/users?q=${main_input.value}`)
    .then(
        (response)=>{
            if(response.total_count == 0){
                result_main.innerHTML = `<div style="text-align:center;"> No results found !!</div>`;
                return;
            }
            let resp_str = "";
            for(let item of response.items )
            {
                resp_str += `
                    <a class="search-result-card" href="${item.html_url}" target="_blank">
                        <img class="search-result-img" src="${item.avatar_url}"></img>
                        <div class="search-result-name">${item.login}</div>
                    </a>
                `;
            }
            result_main.innerHTML = resp_str;
        }
    )
    .catch(
        (error)=>{
            console.log(error)
        }
    );
}
