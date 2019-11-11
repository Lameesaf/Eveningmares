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
//print the time and keep updating it every second
  componentWillMount(){
    setInterval(()=>{
      this.setState({
        time: moment(new Date()).format('LT')
      })
      this.greeting()
    },1000)  
  }
  //print the greeting depends on the time
   greeting =()=>{
     //if the time is in the PM
      if(this.state.time.includes('PM')){
        // time between 12pm to 5pm 
        if(Number(moment(new Date()).format('h')) <=12 && Number(moment(new Date()).format('h')) <=5 ){
          this.setState({
            greeting:'Good Afternoon,  Lamees'
          })    
          //time between 6 to 11:59
        }else{
          this.setState({
            greeting:'Good evening,  Lamees'
          })
        }
        //if the time in the AM
      }else{
        console.log(Number(moment(new Date()).format('h')) <=12 || Number(moment(new Date()).format('h')) <5)
        
        if(Number(moment(new Date()).format('h')) <=12){
          //time between 12am - 4am
           if ( Number(moment(new Date()).format('h')) <5 || Number(moment(new Date()).format('h')) ===12 ){
          this.setState({
            greeting:'Go to sleep,  Lamees'
          })      
          //time between 5am - 11:59am
            }else{
              this.setState({
                greeting:'Good morning,  Lamees'
              })
            }
      }}
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
