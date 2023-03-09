import './App.css';
import React from 'react';
import Container from './components/Container';



class App extends React.Component {
  constructor(props){ 
    super(props) 
        
    this.state = {
      task : ["Formative Assessment","Lab Record","Presonal Project",""],
      current_ind : 0
    }
  }

  add_task(){
    this.setState({
      task : [...this.state.task, ""]
    })
  }

  edit_task(){
    this.setState({
      task : [...this.state.task]
    })
  }

  render(){
    const items = [];
    this.state.task
    .map((item,ind) => {
      items.push(
        <div className="task-card" draggable="true" >
              <div style={{padding:'5px 0px'}}>::</div>
              <div className="task-input-container">
                  <input className="task-input" type="text" value={item} onChange={this.edit_task}/>
              </div>
              <div className="task-btn-container"> 
                  <button className="btn" type="button" >Delete</button>
              </div>
        </div>
      );
    }
    );
    return (
    <div className="App">
      <div className="heading">
         To Do App
      </div>
      <div id='task-container'>
            {items}
      </div>
      <div style={{textAlign : 'center'}}>
        <button className="btn" onClick={this.add_task} >Add New Task</button>
      </div>
    </div>
  )};
}

export default App;
