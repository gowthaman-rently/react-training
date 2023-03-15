import React from 'react';
import IconButton from '@mui/material/IconButton';
import Card from '@mui/material/Card';
import DeleteIcon from '@mui/icons-material/Delete';
import Checkbox from '@mui/material/Checkbox';

class TaskCard extends React.Component{

    render(){
        let delete_btn;
        if(this.props.item.status){
            delete_btn = ""
        }
        else{
            delete_btn = <IconButton onClick={()=>this.props.deleteTask(this.props.ind)} title='Delete'>
                <DeleteIcon></DeleteIcon>
            </IconButton>;
        }
        return <Card variant="outlined" draggable="true" id={this.props.ind} className='task-card' key={this.props.ind} 
            onDrop={(event)=>this.props.drop(event, this.props.ind)} onDragOver={(event)=>this.props.allowDrop(event)} onDragStart={(event)=>{this.props.drag(event)}} >
            <Checkbox  onClick={()=>this.props.handleTask(this.props.ind)} defaultChecked={this.props.item.status?true:false}/>
            <div className="task-input-container">
                <input className="task-input" type="text" value={this.props.item.text} onInput={(event)=>this.props.editTask(this.props.ind, event)} onKeyDown={(event)=>this.props.editTask(this.props.ind, event)} id={"task-"+this.props.ind} disabled={this.props.item.status?true:false} />
            </div>
            <div className="task-btn-container"> 
                {delete_btn}
            </div>
        </Card>;
    }
}

export default TaskCard;