import React from 'react';
import Card from './Card';

class Container extends React.Component{
    render(){
        return <div id='task-container'>
            {this.props.task.forEach((item, ind, task) =><Card task={item} ind={ind}></Card>)};
        </div>
    }
}

export default Container;