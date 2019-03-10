import React, { Component } from 'react';
import './App.css';
import store from './store';
import {add,minus,cet4} from './action';
import {connect}   from 'react-redux'

// store提供属性 存值   action提供方法 干哈  reducer改
// store提供属性   action提供方法干哈  reducer改
class App extends Component {
  constructor(params){
    super(params);
    this.addHandler=this.addHandler.bind(this);

  }
  addHandler(){
    console.log('add');
    store.dispatch(add(2));
    // 触发action  store.dispatch
  }
  render() {

    return (
      <div>
        首页
        <button onClick={this.addHandler}>+</button>
        <button onClick={()=>{
          store.dispatch(minus(3))
        }}>-</button>
       <div>
          <h1>贱贱四级成绩</h1>
          <button onClick={()=>{
            store.dispatch(cet4(100))
          }}>下次</button>
       </div>
      </div>
    );
  }
}

let mapStatetoProps  =(state)=>{
   return{
     count:state.count,
     cet4:state.cet4
   }
}

export default  connect(mapStatetoProps)(App);
