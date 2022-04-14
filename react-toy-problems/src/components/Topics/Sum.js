import React, { Component } from "react";

class Sum extends Component {
  constructor() {
    super();

    this.state = {
      Num1: 0,
      Num2: 0,
      sum: "please input two numbers above"
    };
  }
  
  handleChange1(arg){
    this.setState({
      Num1: +arg,
    });
  }
  handleChange2(arg){
    this.setState({
      Num2: +arg,
    });
  }

  
  addNums(num1, num2){
    let total = num1 + num2
    this.setState({sum: total})
  }


  render() {
    return (
      <div className="puzzleBox sumPB">
        <h4>Sum</h4>

        <input className="inputLine" onChange={(e) => this.handleChange1(e.target.value)}></input>

        <input className="inputLine" onChange={(e) => this.handleChange2(e.target.value)}></input>

        <button className="confirmationButton" onClick={(e) => this.addNums(this.state.Num1, this.state.Num2)}>add</button>

        <span className="resultsBox">{JSON.stringify(this.state.sum)}</span>
      </div>
    );
  }
}
export default Sum;
