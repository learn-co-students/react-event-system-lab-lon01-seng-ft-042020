import React, {Component} from "react"

class EyesOnMe extends Component{
 
 //When the event fires, print out the text to the console   
    handleFocus = () => {
        console.log("Good!") 
    }
   
    handleBlur = () => {
        console.log("Hey! Eyes on me!") 
    }
  
 //Add event handlers on the <button> that listens for the focus and blur events   
    render(){
        return(
            <button
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}
            >
            Eyes on me MR
            </button>
        )
    }
}

export default EyesOnMe;