// Code Keypad Component Here
import React from 'react'


class Keypad extends React.Component{

    passwordEnter = () => {
        console.log('Entering password...')
    }

    render(){
        return <input type="password" onKeyUp={this.passwordEnter}/> 
    }
}

export default Keypad