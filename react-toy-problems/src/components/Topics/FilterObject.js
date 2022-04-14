import React,{Component} from 'react'

class FilterObject extends Component{
    render(){
        return  <div className="puzzleBox ">

                <h4>Filter Objects</h4>
                
                <span className="puzzleText"></span>

                <input className="inputLine"></input>

                <button className="confirmationButton">Filter</button>

                <span className="resultsBox filterObjectRB"></span>

                </div>
    }
}
export default FilterObject
