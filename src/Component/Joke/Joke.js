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
  //take the joke from the api and print it
  printJoke = (joke) => {
    console.log(joke)
    //check if the joke is single line
    if (joke.type === 'single') {
      this.setState({
        joke:{
        type: joke.type,
        category: joke.category,
        joke: joke.joke}
      })
      //if the joke has 2 lines
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
