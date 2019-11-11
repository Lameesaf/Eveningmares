import React, { Component } from 'react'
import PrintJoke from './PrintJoke'
import FaveJokes from './FaveJokes'
import { Button } from 'antd';



export default class JokeList extends Component {
  constructor(props) {
    super()
    this.state = {
      favejokes: []
    }
  }
//
  handleFaveJoke=(faveJoke)=>{
    //make a copy from the favorite joke
    const faveJokes = [...this.state.favejokes]
    //get the index of the clicked joke
    const index = faveJokes.indexOf(faveJoke)
    //if the joke was not there
    if(index===-1){
      //add the joke
    this.setState({
        favejokes: [...this.state.favejokes,faveJoke]
      })
    }
    //if the joke was there do nothing
  }
// delete all favorite joke
  clearFaveJoke=(e)=>{
  this.setState({
    favejokes: []
  })}
  render() {

    return (
      <div style={{textAlign: 'center', margin: '5px'}}>
        <PrintJoke joke={this.props.joke} addFave={this.handleFaveJoke} />
        {this.state.favejokes.length>0 ? <FaveJokes faveJoke={this.state.favejokes}/>:false}
      <Button onClick={this.clearFaveJoke}>clear</Button>

      </div>
    )
  }
}
