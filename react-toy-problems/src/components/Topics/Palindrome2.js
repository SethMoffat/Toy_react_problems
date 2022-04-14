import React,{useState} from 'react'

function Palindrome2(){
    let [userInput, setUserInput]=useState("")
    let [pal, setPal]=useState("input a word")
    
       let palindrome = (str) => {
          let i = 0;
          let j = str.length - 1;
          while(i < j) {
              if(str[i] == str[j]) {
                  i++; 
                  j--;
                  setPal("This is a palindrome")
              }
              else {
                   setPal("This is not a Palindrome")
                   break
              }
          }
          
      }
        render(){
        return <div className="puzzleBox ">

                <h4>Palindrome 2</h4>
        
        <span className="puzzleText"></span>

        <input className="inputLine" onChange={(e) => setUserInput(e.target.value)}></input>

        <button className="confirmationButton" 
        onClick={(e) => palindrome(userInput)}>Check</button>

        <span className="resultsBox filterObjectRB">{JSON.stringify(pal)}</span>
        <br></br>

        </div>
        }
}

export default Palindrome2