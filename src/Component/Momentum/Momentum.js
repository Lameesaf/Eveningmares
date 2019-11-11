import React, { Component } from 'react'
import Images from './Images';
import Weather from './Weather';
import Quote from './Quote';
import Time_Greeting from './Time_Greeting';
import './style.css'

export default class Momentum extends Component {
  constructor(props){
    super()
    this.state={
      image: 'https://images.unsplash.com/photo-1572240347738-ab4967cd9641?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjY4OTUwfQ',
    }
  }
  //change the background image  from the API in Images component 
  backgroundImage=(backgroundImage)=>{
    this.setState({
      image: backgroundImage
    })
  }

  render() {
    
    return (
      
      <div className='body' style={{ backgroundImage: `url(${this.state.image})` }}>
        <Time_Greeting/>
        {/* <Images backgroundImage={this.backgroundImage}/> */}
        <Weather/>
        <Quote/>
      </div>
    )
  }
}
