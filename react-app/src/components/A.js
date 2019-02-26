import React, { Component } from 'react'

export default class A extends Component {
  constructor(){
    super();
    this.go=this.go.bind(this);
  }
  go(){
    this.props.history.push('/');
  }
  render() {
    console.log(this.props);
    console.log(this.props.match.params.id);
    let {match} = this.props;
    return (
      <div>
          A页{match.params.id}
          <button onClick={this.go}>回到首页</button>
          <button onClick={()=>{
            this.props.history.go(-3);
            // this.props.histort.goBack();
            // this.props.histort.goForward();
            // this.props.push('/')
          }}>jump</button>
      </div>
    )
  }
}
