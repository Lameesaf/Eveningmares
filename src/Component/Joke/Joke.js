import React, { Component } from 'react'
import JokeApi from './JokeApi'

export default class Joke extends Component {
  constructor(props) {
    super()
    this.state = {
      type: '',
      joke: '',
      setup: '',
      delivery: '',
      category: ''
    }
  }
  printJoke = (joke) => {
    console.log(joke)
    if (joke.type === 'single') {
      this.setState({
        type: joke.type,
        category: joke.category,
        joke: joke.joke
      })
    } else {
      this.setState({
        type: joke.type,
        category: joke.category,
        setup: joke.setup,
        delivery: joke.delivery
      })
    }
  }

  render() {
    return (
      <div>
        <JokeApi printJoke={this.printJoke} />
        {this.state.joke === '' ? false
          : <p>category: {this.state.category}</p> &&
            this.state.type === 'single' ? <p>{this.state.joke}</p>
            : <p> {this.state.setup} <br /> {this.state.delivery} </p>}

      </div>
    )
  }
}
