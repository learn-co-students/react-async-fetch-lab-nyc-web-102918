// create your App component here
import React from 'react'


class App extends React.Component {

 state = {
   peoples: []
 }




  componentDidMount(){

  fetch('http://api.open-notify.org/astros.json')
  .then(response => response.json())
  .then( data => {
    //porque es un objeto y adentro tiene un vector que la key es people
    this.setState({peoples: data.people})
  })
  }
// sino declaro esta variable dice que peoples no esta definida por eso debo usar el this.state
  render() {
  //  const peoples = this.state
    //    console.log(Object.values(peoples))
    return (
      <div>
        {Object.values(this.state.peoples).map(p=> {
           return <div key={p.name}>{p.name}</div>
        })}
        {console.log(Object.values(this.state.peoples))}
      </div>

    )
  }
}

export default App
