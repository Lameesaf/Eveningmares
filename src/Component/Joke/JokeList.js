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
  // showFave = () => {
  //   if (this.state.favejokes.length > 0) {
  //     this.setState({
  //       favejokes: this.props.faveJokes.map((faveJoke, index) => {
  //         return <PrintFaveJoke faveJoke={faveJoke} key={index} />
  //       })
  //     })
  //   }
  // }

  handleFaveJoke=(faveJoke)=>{
    const faveJokes = [...this.state.favejokes]
    const index = faveJokes.indexOf(faveJoke)
    if(index!==-1){
    
    }else{
      this.setState({
        favejokes: [...this.state.favejokes,faveJoke]
      })
    }
  }

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
