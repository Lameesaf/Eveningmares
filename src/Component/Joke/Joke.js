import React, { Component } from 'react'
import JokeApi from './JokeApi'
import JokeList from './JokeList'

export default class Joke extends Component {
  constructor(props) {
    super()
    this.state = {
      joke:{
      type: '',
      joke: '',
      setup: '',
      delivery: '',
      category: ''}}
  }
  printJoke = (joke) => {
    console.log(joke)
    if (joke.type === 'single') {
      this.setState({
        joke:{
        type: joke.type,
        category: joke.category,
        joke: joke.joke}
      })
    } else {
      this.setState({
        joke:{
          type: joke.type,
          category: joke.category,
          setup: joke.setup,
          delivery: joke.delivery}
        })
      }
      console.log(this.state.joke)
  }

  render() {
    return (
      <div>
        <JokeApi  printJoke={this.printJoke} />
        {console.log(this.state.joke.joke !== '')}
      {this.state.joke.joke !== '' ? <JokeList joke={this.state.joke} /> :false}
        
      </div>
    )
  }
}
