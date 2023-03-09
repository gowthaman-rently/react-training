import React from 'react';

class Card extends React.Component{

    render(){
        return <div className="task-card" draggable="true" >
            <div style={{padding:'5px 0px'}}>::</div>
            <div className="task-input-container">
                <input className="task-input" type="text" value={this.props.task} />
            </div>
            <div className="task-btn-container"> 
                <button className="btn" type="button" >Delete</button>
            </div>
        </div>;
    }
}

export default Card;