import Component from './Component';
import React from 'react';
import './App.css';
// import { useEffect ,useState, useContext, createContext } from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      message:"Welcome",
      status:true
    }
  }

  changeMessage(txt){
    this.setState({
      message:txt,
      status:this.state.status
    })
  }

  changeStatus(){
    this.setState({
      message:this.state.message,
      status:false
    })
  }

  
  render() { 
    // console.log("App render");
    return ( 
    <div className="App">
    {this.state.status?<Component message={this.state.message} status={this.state.status} changeMessage={()=>{this.changeMessage(prompt("Text?"))}} changeStatus={()=>{this.changeStatus()}}/>:""}
    </div> );
  }
}

// function App() {
//   const [message,changeMessage] = useState("Welcome");
//   const [status, changeStatus] = useState(true);
  
  // useEffect(()=>{
  //   console.log("Did Mount",message, status);
  //   return ()=>{console.log("Did UnMount",message, status)};
  // }, []);

  // useEffect(()=>{
  //   console.log("Did update");
  //   return ()=>{console.log("Did unUpdate")}
  // }, [message])

  
//   return (
//     <div className="App">
//       {console.log("App render")}
//       {status?<Component message={message} status={status} changeMessage={()=>{changeMessage(prompt("Text?"))}} changeStatus={()=>{changeStatus(false)}}/>:""}
//     </div>
//   );
// }


// const UserContext = createContext();

// function Component1() {
//   const [user, setUser] = useState("Jesse Hall");

//   return (
//     <UserContext.Provider value={user}>
//       <h1>{`Hello ${user}!`}</h1>
//       <Component2 />
//     </UserContext.Provider>
//   );
// }

// function Component2() {
//   return (
//     <>
//       <h1>Component 2</h1>
//       <Component3 />
//     </>
//   );
// }

// function Component3() {
//   return (
//     <>
//       <h1>Component 3</h1>
//       <Component4 />
//     </>
//   );
// }

// function Component4() {
//   return (
//     <>
//       <h1>Component 4</h1>
//       <Component5 />
//     </>
//   );
// }

// function Component5() {
//   const user = useContext(UserContext);

//   return (
//     <>
//       <h1>Component 5</h1>
//       <h2>{`Hello ${user} again!`}</h2>
//     </>
//   );
// }

export default App;
