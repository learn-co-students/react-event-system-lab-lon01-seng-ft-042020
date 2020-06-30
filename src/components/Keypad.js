import React, {Component} from "react"

class Keypad extends Component{

//When the event fires, print out the text to the console    
handleKeyUp = () => {
console.log("Entering password...")
}



//On the <input>, add an event handler that listens for the keyUp event
    render(){
        return(
            <div>
            <label> Password </label>
            <input type="password" placeholder="Enter your password" onKeyUp={this.handleKeyUp} />
            </div>
        )
    }
}

export default Keypad;