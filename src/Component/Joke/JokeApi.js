import React, { Component } from 'react'
import axios from 'axios'
import { API_KEY } from '../../api'
import Dropdown from '../Dropdown/Dropdown'
import {Categories} from '../Dropdown/DropdownDB'
export default class JokeApi extends Component {
      constructor(props){
        super()
        this.state={
          category: 'Programming'
        }
      }
      dropdownHandle=(e)=>{
        this.setState({
          category: e.target.value
        })
      }

  searchHandle =()=>{
    const baseURL= `https://sv443.net/jokeapi/category/${this.state.category}`
      axios({
        method: 'GET',
        url: baseURL,
    }).then(res=>{
      console.log(res)
      this.props.printJoke(res.data)

    })
  }

  render() {
    return (
      <div>
        <Dropdown dropdownHandle={this.dropdownHandle} dropdownList={Categories}/>
          <button onClick={this.searchHandle}>search</button>
      </div>
    )
  }
}
