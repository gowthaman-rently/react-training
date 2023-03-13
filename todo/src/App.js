import './App.css';
import React from 'react';
import IconButton from '@mui/material/IconButton';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import DragIndicatorOutlinedIcon from '@mui/icons-material/DragIndicatorOutlined';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';

class App extends React.Component {
  constructor(props){ 
    super(props) 
        
    this.state = {
      task : [{"text":"Formative Assessment","status":false},{"text":"Lab Record","status":false},{"text":"Presonal Project","status":false}],
      current_ind : 0,
      value : "1"
    }
  }

  add_task(){
    this.setState({
      task : [...this.state.task, {"text":"","status":false}],
      current_ind : this.state.task.length,
      value: this.state.value
    })
  }  

  edit_task(ind, event){
    if(event.code === "Enter"){
      document.getElementById("task-"+(ind)).blur()
      return ;
    }
    var task_list = this.state.task;
    task_list[ind].text = event.target.value;
    this.setState({
      task : task_list,
      current_ind : ind,
      value: "1"
    })
  }

  delete_task(ind){
    var task_list = this.state.task;
    task_list.splice(ind,1);
    console.log(task_list);
    this.setState({
      task : task_list,
      current_ind : false
    })
  }

  allowDrop(event) {
    event.preventDefault();
  }
  
  drag(event) {
    event.dataTransfer.setData("id", event.target.id);
  }

  drop(event, id) {
    event.preventDefault();
    var data = parseInt(event.dataTransfer.getData("id"));
    var arr = this.state.task;
    var element = arr[data];
    arr.splice(data, 1);
    arr.splice(id, 0, element);
    this.setState({
      task:arr,
      current_ind:false
    })
  }

  componentDidUpdate(){
    if(this.state.current_ind !== false && this.state.current_ind < this.state.task.length  && this.state.task.length !== 0){
      document.getElementById("task-"+(this.state.current_ind)).focus();
    }
  }

  handleChange = (event, newValue) => {
    this.setState({
      value:newValue,
      task: this.state.task,
      current_ind : false
    })
  };

  handleTask(id){
    let arr = this.state.task;
    arr[id].status = !arr[id].status;
    this.setState({
      value:this.state.value,
      task: arr,
      current_ind : false
    })
  }

  render(){
    const items = [];
    const com_items = [];
    this.state.task
    .map((item,ind) => {
      if(item.status){
        com_items.push(
          <Card variant="outlined" draggable="true" key={ind} id={ind} className='task-card' onDrop={(event)=>this.drop(event, ind)} onDragOver={(event)=>this.allowDrop(event)} onDragStart={(event)=>{this.drag(event)}} >
            <DragIndicatorOutlinedIcon className='reorder' titleAccess='Reorder'></DragIndicatorOutlinedIcon>
            <Checkbox defaultChecked  onClick={()=>this.handleTask(ind)}/>
            <div className="task-input-container">
                <input className="task-input" disabled type="text" value={item.text} onInput={(event)=>this.edit_task(ind, event)} onKeyDown={(event)=>this.edit_task(ind, event)} id={"task-"+ind}/>
            </div>
          </Card>
        );
      }
      else{
        items.push(
          <Card variant="outlined" draggable="true" id={ind} className='task-card' key={ind} 
            onDrop={(event)=>this.drop(event, ind)} onDragOver={(event)=>this.allowDrop(event)} onDragStart={(event)=>{this.drag(event)}} >
            <DragIndicatorOutlinedIcon className='reorder' titleAccess='Reorder' ></DragIndicatorOutlinedIcon>
            <Checkbox  onClick={()=>this.handleTask(ind)}/>
            <div className="task-input-container">
                <input className="task-input" type="text" value={item.text} onInput={(event)=>this.edit_task(ind, event)} onKeyDown={(event)=>this.edit_task(ind, event)} id={"task-"+ind}/>
            </div>
            <div className="task-btn-container"> 
              <IconButton onClick={()=>this.delete_task(ind)} title='Delete'>
                <DeleteIcon ></DeleteIcon>
              </IconButton>
            </div>
          </Card>
        );
      }
      return items;
    });

    return (
      <div className="App">
        <div className="heading">
          To Do App
        </div>
        
        <div id='task-container'>
          <TabContext value={this.state.value}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <TabList onChange={this.handleChange} aria-label="lab API tabs example">
                <Tab label="Tasks" value="1" />
                <Tab label="Completed" value="2" />
              </TabList>
            </Box>
            <TabPanel value="1" style={{padding:"0px"}}>
                {items.length !== 0?items:<div style={{fontWeight:"bold",textAlign:"center", padding:"10px"}}>No Task</div>}
                <div style={{textAlign : 'center',padding : "30px "}}>
                  <Button onClick={()=>this.add_task()} style={{color:"black",fontWeight:"bold",border:"black 2px solid"}} variant="outlined" color="primary">Add New Task</Button>
                </div>
            </TabPanel>
            <TabPanel value="2" style={{padding:"0px"}}>
                  {com_items.length !== 0?com_items:<div style={{fontWeight:"bold",textAlign:"center",padding:"10px"}}>No Task</div>}
            </TabPanel>
          </TabContext>
        </div>
      </div>
    )
  };
}

export default App;
