import React, { Component } from 'react'
import { appid } from '../../api'
import axios from 'axios'

export default class Weather extends Component {
  
  constructor(props){
    super()
    this.state={
        clear: '☀',
        rain: '️🌧',
        storm: '⛈',
        snow: '🌨',
        mist: '🌫',
        clouds: '☁',
        icon: '',
        temp: '',
        city: ''
    }
  }
  // get the wether from the API
  componentWillMount(){
    axios({
      method: 'get',
      url: `https://api.openweathermap.org/data/2.5/weather?id=108410&units=metric&appid=${appid}`
    })
    .then (result=>{
      this.setState({
        icon: this.state[(result.data.weather[0].main).toLowerCase()],
        temp: result.data.main.temp,
        city: result.data.name
      })
    })
    //update the weather every 10 minutes
    setInterval(()=>{
      axios({
        method: 'get',
        url: `https://api.openweathermap.org/data/2.5/weather?id=108410&units=metric&appid=${appid}`
      })
      .then (result=>{
        this.setState({
          icon: this.state[(result.data.weather[0].main).toLowerCase()],
          temp: result.data.main.temp,
          city: result.data.name
        })
      })
    },(1000*60)*10)
  }
  render() {
    return (
      <div className="wether">
      <p className="temp">{this.state.icon}{this.state.temp}ºC<br/>{this.state.city} </p>
      </div>
    )
  }
}
