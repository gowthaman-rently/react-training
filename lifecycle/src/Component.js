import React from 'react';

class Component extends React.Component{

    componentWillMount(){
        console.log("componentWillMount()");
    }

    componentDidMount(){
        console.log("componentDidMount()");
    }

    componentWillReceiveProps(){
        console.log("componentWillRecieveProps()");
    }
    
    shouldComponentUpdate(){
        console.log("shouldComponentUpdate()");
        return true;
    }

    componentWillUpdate(){
        console.log("componentWilUpdate()");
    }

    componentDidUpdate(){
        console.log("componentDidUpdate()");
    }

    componentWillUnmount(){
        console.log("componentWillUnMount()");
    }

    update(){
        this.setState({
            message:"Thank You For Coming"
        });
    } 

    render(){
        return <div>
            {this.props.message}<br></br>
            <button onClick={()=>this.props.changeMessage()}>change</button><br/>
            <button onClick={()=>this.props.changeStatus()}>Remove</button>
        </div>;
    }
}


// function Component(props){
    
//     return(
//         <div>
//             <div>{props.message}</div>
//             <button onClick={()=>props.changeMessage()}>change</button><br/>
//             <button onClick={()=>props.changeStatus()}>Remove</button>
//         </div>
//     )
// }

export default Component;