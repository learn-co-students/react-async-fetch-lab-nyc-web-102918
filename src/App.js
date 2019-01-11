import React from 'react'

class App extends React.Component {

  state = {
    people: []
  }

  componentDidMount() {
    fetch('http://api.open-notify.org/astros.json')
      .then(response => response.json())
      .then(data => {
        this.setState({people: data.people},()=>console.log(this.state))
      })
  }

  render() {
    return(
      <div>
        {this.state.people.map(person=>{
          return <h2 key={person.name}>{person.name}</h2>
        })}
      </div>
    )
  }
}

export default App
