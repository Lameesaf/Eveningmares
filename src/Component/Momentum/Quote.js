import React, { Component } from 'react'
import axios from 'axios'
import { key } from '../../api'


export default class Quote extends Component {
constructor(props){
  super()
  this.state={
    quote: '',
    author: ''
  }
}
  componentWillMount(){
    axios({
      method: 'get',
      url: `http://api.forismatic.com/api/1.0/?method=getQuote&key=${key}&format=json&lang=en`
    })
    .then (result=>{
      this.setState({
        quote: result.data.quoteText,
        author: result.data.quoteAuthor
      })
    })
  }
  render() {
    return (
      <div className="quote">
        {this.state.quote}<br/> -{this.state.author}
      </div>
    )
  }
}
