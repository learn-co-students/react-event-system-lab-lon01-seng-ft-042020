import React from 'react'

class Keypad extends React.Component{

    keyUpEventListener = () => {
        console.log("Entering password...")
    }

    render(){
        return(
            <div>
                <input type="password" onKeyUp={this.keyUpEventListener}></input>
            </div>
        )
    }

}

export default Keypad