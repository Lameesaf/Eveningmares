import React, { Component } from 'react'
import axios from 'axios';
import { clint_id } from '../../api'

export default class Images extends Component {
constructor(props){
  super()

}
//get a random image for the background
  componentWillMount(){
      // this.props.backgroundImage("https://images.unsplash.com/photo-1569492329917-eaddc4e71bc7?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjY4OTUwfQ")
  axios({
    method: 'get',
    url: `https://api.unsplash.com/photos/random/?client_id=${clint_id}`
  })
  .then (result=>{
      this.props.backgroundImage(result.data.urls.regular)
  })
  }
  render() {
    return (
      <div>
        
      </div>
    )
  }
}
