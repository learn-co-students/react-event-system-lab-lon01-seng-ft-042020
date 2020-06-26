// Code EyesOnMe Component Here
import React from 'react'

class EyesOnMe extends React.Component{

onFocusReturn = () => {
    return console.log('Good!')
}

onBlurReturn = () =>{
    return console.log('Hey! Eyes on me!')
}

render(){
  return  <button 
    onFocus={this.onFocusReturn} 
    onBlur={this.onBlurReturn} 
  >Button</button>
}
}


export default EyesOnMe