import React,{Component} from 'react'
import EvenAndOdd from '../Topics/EvenAndOdd'
import FilterString from "../Topics/FilterString"
import Palindrome from "../Topics/Palindrome"
import Sum from "../Topics/Sum"
import Palindrome2 from "../Topics/Palindrome2"

class TopicBrowser extends Component{
    render(){
        return <div><EvenAndOdd/>
                    {/* <FilterObject/> */}
                    <FilterString/>
                    <Palindrome/>
                    <Palindrome2/>
                    <Sum/>

                    
                    
                    </div>
    }
}
export default TopicBrowser
