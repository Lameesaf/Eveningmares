import React, { Component } from 'react'
import PrintJoke from './PrintJoke'
import PrintFaveJoke from './PrintFaveJoke'


export default class JokeList extends Component {
  constructor(props) {
    super()
    this.state = {
      favejokes: []
    }
  }
  showFave = () => {
    if (this.props.faveJokes.length > 0) {
      this.setState({
        favejokes: this.props.faveJokes.map((faveJoke, index) => {
          return <PrintFaveJoke faveJoke={faveJoke} key={index} />
        })
      })
    }
  }
  render() {

    return (
      <div>

        <PrintJoke showFave={this.showFave} joke={this.props.joke} addFave={(e) => this.props.addFave(this.props.joke)} faveJokes={this.props.faveJokes} />
        {console.log(this.state.favejokes)}
        {this.state.favejokes ? console.log(this.state.favejokes) && this.state.favejokes.map(joke=>{
          console.log(joke)
          return joke
        }) : false}
      </div>
    )
  }
}
