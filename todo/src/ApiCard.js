import React, { Component } from 'react';
import {ApiCaller} from './Api';

class ApiCardCom extends Component {
    state = { data:{} } 
    async componentDidMount(){
       const resp = await ApiCaller();
       this.setState({
        data:resp
       }
       )
    }
    render() { 
        return (<>
            {JSON.stringify(this.state.data)}
        </>);
    }
}
 
export default ApiCardCom;