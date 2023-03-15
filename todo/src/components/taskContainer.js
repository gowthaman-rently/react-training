import React from 'react';
import TaskCard from './taskCard';

class TaskContainer extends React.Component{
    render(){
        return <div id='task-container'>
            {this.props.task.forEach((item, ind, task) =><TaskCard task={item} ind={ind}></TaskCard>)};
        </div>
    }
}

export default TaskContainer;