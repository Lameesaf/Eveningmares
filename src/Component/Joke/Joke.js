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
      category: ''},
    faveJokes: []}
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
  handleFaveJoke=(faveJoke)=>{
    const faveJokes = [...this.state.faveJokes]
    const index = faveJokes.indexOf(faveJoke)
    if(index!==-1){
    
    }else{
      this.setState({
        faveJokes: [...this.state.faveJokes,faveJoke]
      })
    }
  }

  clearFaveJoke=(e)=>{
  this.setState({
    faveJokes: []
  })
}

  render() {
    return (
      <div>
        <JokeApi  printJoke={this.printJoke} />
        {console.log(this.state.joke.joke !== '')}
      {this.state.joke.joke !== '' ? <JokeList joke={this.state.joke} faveJokes={this.state.faveJokes} addFave={this.handleFaveJoke}/> :false}
        

      {console.log(this.state.faveJokes)}
      {this.state.faveJokes.length>0 ? <JokeList faveJokes={this.state.faveJokes} addFave={this.state.faveJokes}/> :false}
      <button onClick={this.clearFaveJoke}>clear</button>
      </div>
    )
  }
}
