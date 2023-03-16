import React from 'react';

class Component extends React.Component{

    componentWillMount(){
        console.log("componentWillMount()", this.props.message,  this.props.status);
    }

    componentDidMount(){
        console.log("componentDidMount()", this.props.message,  this.props.status);
    }

    componentWillReceiveProps(){
        console.log("componentWillRecieveProps()", this.props.message,  this.props.status);
    }
    
    shouldComponentUpdate(){
        console.log("shouldComponentUpdate()", this.props.message,  this.props.status);
        return true;
    }

    componentWillUpdate(){
        console.log("componentWilUpdate()", this.props.message,  this.props.status);
    }

    componentDidUpdate(){
        console.log("componentDidUpdate()", this.props.message,  this.props.status);
    }

    componentWillUnmount(){
        console.log("componentWillUnMount()", this.props.message,  this.props.status);
    }

    update(){
        this.setState({
            message:"Thank You For Coming"
        });
    } 

    render(){
        // console.log("component render");
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