import React, { Component } from 'react';

class CallBackCard extends Component {
    render() { 
        return (<>
            <div>
                <button onClick={this.props.callback} >Call</button>
            </div>
        </>);
    }
}
 
export default CallBackCard;