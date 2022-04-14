import React,{Component} from 'react'


//step 1: Save user's input to state
//step 1.4: Monitor for changes in input
//step 1.5: create a function that console logs it's argument
//step 1.6: call that function when the input changes
//step 1.7: Console log changes in input
//step 1.8: update state with user's input

//step 2: Button displays filtered array when pressed
//step 2.1: Monitor for button to be clicked
//step 2.2: create a function that console logs something when button is clicked
//step 2.3: Make that function console log it's arguement
//step 2.4: figure out logic of how to filter
//step 2.5: save filtered array to state
//step 2.6: display filtered array on the page


class FilterString extends Component{
    constructor() {
        super();
    
        this.state = {
          userInput:"",
          unfilteredArr: ["Pizza", "Burger", "Soup", "Salad", "Cheese"],
          filtered:[]
        };
      }

      handleChange(arg){
        this.setState({
            userInput: arg,
          });
          
      }

      filterFoods(arg){
        let foods = this.state.unfilteredArr
        let filteredFoods = []

        for (var i = 0; i < foods.length; i++){
            if (foods[i].includes(arg)){
                filteredFoods.push(foods[i])
            }
        }

        this.setState({filtered: filteredFoods})

      }
      

    render(){
        return <div className="puzzleBox ">

        <h4>Filter Strings</h4>
        
        <span className="puzzleText">"Pizza", "Burger", "Soup", "Salad", "Cheese"</span>

        <input className="inputLine" onChange={(event) => this.handleChange(event.target.value)}></input>

        <button className="confirmationButton" 
        onClick={(e) => this.filterFoods(this.state.userInput)}>Filter</button>

        <span className="resultsBox filterObjectRB">{JSON.stringify(this.state.filtered)}</span>
        <br></br>

        </div>
    }
}
export default FilterString






