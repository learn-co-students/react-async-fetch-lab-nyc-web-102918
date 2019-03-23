// create your App component here
import React, {Component, Fragment} from "react"

class App extends Component {
  state = {
    astronauts: []
  }

  componentDidMount() {
    fetch("http://api.open-notify.org/astros.json")
    .then(r => r.json())
    .then(data => {
      this.setState({
        astronauts: data.people
      })
    })
  }

  render() {
    return (
      <Fragment>
        {this.state.astronauts.map(astronaut => {
          return <div key={astronaut.name}>
                   <h2>{astronaut.name}</h2>
                   <h4>{astronaut.craft}</h4>
                 </div>
        })}
      </Fragment>
    )
  }
}

export default App
