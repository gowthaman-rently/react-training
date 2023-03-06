let task = ["Formative Assessment","Lab Record","Presonal Project"];
let current_ind = 0;
function add_task(){
    task[task.length] = "";
    render_task();
    document.getElementById("task-"+(task.length-1)).focus();
}

function render_task(){
    let task_src = "";
    if(task.length)
    {
        for(i =0 ; i < task.length; i++){
            task_src += `
                <div class="task-card" draggable="true" ondrag="">
                    <div style="padding:5px 0px">::</div>
                    <div class="task-input-container">
                        <input class="task-input" type="text" id="task-${i}" value="${task[i]}" oninput="edit_task(this, ${i})">
                    </div>
                    <div class="task-btn-container"> 
                        <!-- <button class="btn" onclick="edit_task(${i})">Edit</button> -->
                        <button class="btn" type="button" onclick="delete_task(${i})">Delete</button>
                    </div>
                </div>
            `;
        }
    }
    else{
        task_src = `
            <div style="text-align:center;font-size:18px;">No Task</div>
        `;
    }
    document.getElementById("task-container").innerHTML = task_src;
}

function edit_task(ele, ind){
    task[ind] = ele.value;    
    console.table(task);
    current_ind= ind;
}

function submit_task(){
    document.getElementById("task-"+current_ind).blur();
}


function delete_task(ind){
    task.splice(ind,1);
    render_task();
}

render_task();
