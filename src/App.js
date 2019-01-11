// create your App component here
import React from 'react'

export default class App extends React.Component{

 state = {astros: {} }

 componentDidMount(){
   fetch('http://api.open-notify.org/astros.json')
   .then((resp)=>resp.json()).then((astros)=>this.setState({astros:astros}))
 }

  render(){
    console.log(this.state.astros)
  return  this.state.astros.people? this.state.astros.people.map((person)=> <h4>person.name</h4>) : null

  }
}
