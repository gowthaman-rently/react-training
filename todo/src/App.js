import './App.css';
import React from 'react';
import IconButton from '@mui/material/IconButton';
import Card from '@mui/material/Card';
import AddIcon from '@mui/icons-material/Add';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import { TextField } from '@mui/material';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Box from '@mui/material/Box';
import TaskCard from './components/taskCard';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

class App extends React.Component {
  constructor(props){ 
    super(props) 
        
    this.state = {
      task : [{"text":"Formative Assessment","status":false, "labels":[]},{"text":"Lab Record","status":false, "labels":[]},{"text":"Presonal Project","status":false, "labels":[]}],
      current_ind : 0,
      value : 1,
      labels : ["All"]
    }
  }

  addTask(){
    const val = document.getElementById("add-input");
    if(val.value.length === 0){
      document.getElementById("add-input").label = "error";
      return ;
    }
    this.setState({
      task : [{"text":val.value,"status":false,"labels":[]},...this.state.task],
      current_ind : false,
      value: this.state.value,
      labels : this.state.labels
    })
    val.value = "";
  }  

  editTask(ind, event){
    if(event.code === "Enter"){
      document.getElementById("task-"+(ind)).blur()
      return ;
    }
    var task_list = this.state.task;
    task_list[ind].text = event.target.value;
    this.setState({
      task : task_list,
      current_ind : ind,
      value: 1
    })
  }

  deleteTask(ind){
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

  handleChange = (event, newValue) => {
    this.setState({
      value:newValue,
      task: this.state.task,
      current_ind : false
    })
  };
  
  handleAccordation = (event, newvalue )=>{}

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
      const cardJSX = <TaskCard ind={ind} item={item}  key={ind}
          drop = {(event, ind)=>this.drop(event, ind)} allowDrop = {(event)=>this.allowDrop(event)} drag={(event)=>this.drag(event)}
          handleTask ={(ind)=>this.handleTask(ind)} editTask = {(ind, event)=>this.editTask(ind, event)} deleteTask={(ind)=>this.deleteTask(ind)}
        ></TaskCard>;
      
      if(item.status) com_items.push(cardJSX);
      else items.push(cardJSX);
      return cardJSX;
    });

    return (
      <div className="App">
        <div className="heading fs-2">
          To Do App
        </div>
        <div id='task-container'>
          <TabContext value={this.state.value}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <TabList onChange={this.handleChange} >
                <Tab label="All" value={1} className='text-dark fw-bold fs-6'/>
              </TabList>
            </Box>
            <TabPanel value={1} style={{padding:"0px"}}>
              <Accordion  className="m-0"  expanded="true">
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography className='fw-bold text-secondary fs-5'>Task</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <form onSubmit={(event)=>{event.preventDefault();this.addTask(); return false;}} >
                    <Card className="task-card my-2">
                      <TextField className="add-input" label="Add New Task" variant="standard" id="add-input"/>
                      <IconButton type="submit" className='add-btn'><AddIcon/></IconButton>               
                    </Card>
                  </form>
                  {items.length !== 0?items:<div style={{fontWeight:"bold",textAlign:"center", padding:"10px"}}>No Task</div>}
                </AccordionDetails>
              </Accordion>
              <Accordion className="m-0" >
                <AccordionSummary expandIcon={<ExpandMoreIcon />} >
                <Typography className="fw-bold text-secondary fs-5" >Completed</Typography>
                </AccordionSummary>
                <AccordionDetails >
                    {com_items.length !== 0?com_items:<div style={{fontWeight:"bold",textAlign:"center",padding:"10px"}}>No Task</div>}
                </AccordionDetails>
              </Accordion>
            </TabPanel>
            <TabPanel value={2} style={{padding:"0px"}}>
            </TabPanel>
          </TabContext>
        </div>
      </div>
    )
  };
}


class Tabs extends React.Component {
  
  render() { 


    return (<TabList onChange={this.handleChange} >
      <Tab label="Tasks" value={1} />
      <Tab label="Completed" value={2} />
    </TabList>);
  }
}

export default App;
