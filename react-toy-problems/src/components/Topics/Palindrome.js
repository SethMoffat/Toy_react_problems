import React,{Component} from 'react'

class Palindrome extends Component{

    constructor() {
        super();
    
        this.state = {
          userInput:"",
        };
      }

      handleChange(arg){
        this.setState({
            userInput: arg,
          });
          
        }
        palindrome(str) {
          let i = 0;
          let j = str.length - 1;
          while(i < j) {
              if(str[i] == str[j]) {
                  i++; 
                  j--;
                  this.setState({ pal:"That is a Palindrome"});
              }
              else {
                   this.setState({pal: "That is not a Palindrome"});
                   break
              }
          }
          
      }
         


    render(){
        return <div className="puzzleBox ">

        <h4>Palindrome</h4>
        
        <span className="puzzleText"></span>

        <input className="inputLine" onChange={(e) => this.handleChange(e.target.value)}></input>

        <button className="confirmationButton" 
        onClick={(e) => this.palindrome(this.state.userInput)}>Check</button>

        <span className="resultsBox filterObjectRB">{JSON.stringify(this.state.pal)}</span>
        <br></br>

        </div>
    }
}

export default Palindrome