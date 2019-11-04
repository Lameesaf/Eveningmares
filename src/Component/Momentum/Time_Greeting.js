import React, { Component } from 'react'
import moment from "moment";

export default class Time_Greeting extends Component {
constructor(props){
  super()
  this.state={
    time: '',
    greeting: '',
  }
}
  componentWillMount(){
    setInterval(()=>{
      this.setState({
        time: moment(new Date()).format('LT')
      })
      this.greeting()
    },1000)  
  }
   greeting =()=>{
      if(this.state.time.includes('PM')){
        if(Number(moment(new Date()).format('h')) <=12 && Number(moment(new Date()).format('h')) <=5 ){
          this.setState({
            greeting:'Good Afternoon,  Lamees'
          })    
        }else{
          this.setState({
            greeting:'Good evening,  Lamees'
          })
        }
      }else{
        if(Number(moment(new Date()).format('h')) <=12 && Number(moment(new Date()).format('h')) <5 ){
          this.setState({
            greeting:'Go to sleep,  Lamees'
          })        
            }else{
              this.setState({
                greeting:'Good morning,  Lamees'
              })
            }
      }
    }

  render() {
    return (
      <div className="time">
        <p id='time'>{this.state.time}</p>
        <p id='greeting'>{this.state.greeting}</p>
      </div>
    )
  }
}
