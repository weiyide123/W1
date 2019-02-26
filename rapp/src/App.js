import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(params){
    super(params);
    this.addHandler=this.addHandler.bind(this);

  }
  addHandler(){
    console.log('add');
  }
  render() {

    return (
      <div>
        首页
        <button onClick={this.addHandler}>click</button>
       
      </div>
    );
  }
}

export default App;
