import React, { Component } from "react";

class EvenAndOdd extends Component {
  constructor() {
    super();

    this.state = {
      evenArray: [],
      oddArray: [],
      userInput: "",
    };
  }

  handleChange(val) {
    this.setState({
      userInput: val,
    });
  }

  assignEvenAndOdds(input) {
    let arr = input.split(",");
    let evens = [];
    let odds = [];

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) {
        evens.push(+arr[i]);
      } else {
        odds.push(+arr[i]);
      }
    }
    this.setState({
      evenArray: evens,
      oddArray: odds,
    });
  }

  render() {
    return (
      <div className="puzzleBox evenAndOddPB">
        <center>
          <h4>Evens and odds</h4>
        </center>

        <input
          className="inputLine"
          placeholder="input here"
          onChange={(e) => this.handleChange(e.target.value)}
        ></input>

        <button
          className="confirmationButton"
          onClick={(e) => {
            this.assignEvenAndOdds(this.state.userInput);
          }}
        >
          Split
        </button>

        <span className="resultsBox">
          {JSON.stringify(this.state.evenArray)}
        </span>

        <span className="resultsBox">
          {JSON.stringify(this.state.oddArray)}
        </span>
      </div>
    );
  }
}
export default EvenAndOdd;

// function EvenOdd(){
//     let x = 2
//     if (x % 2=== 0){

//        console.log ("even")
//     }
//         else{
//             console.log ("odd")
//         }
//     }
