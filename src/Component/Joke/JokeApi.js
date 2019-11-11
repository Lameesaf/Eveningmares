import React, { Component } from 'react'
import axios from 'axios'
import Dropdown from '../Dropdown/Dropdown'
import {Categories} from '../Dropdown/DropdownDB'
import { Button } from 'antd';
export default class JokeApi extends Component {
      constructor(props){
        super()
        this.state={
          category: 'Programming'
        }
      }
      //take the category the user choose
      dropdownHandle=(e)=>{
        this.setState({
          category: e.target.value
        })
      }
// git the joke from the API
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
      <div className='div'>
        <Dropdown dropdownHandle={this.dropdownHandle} dropdownList={Categories}/>
          <Button className='button'  type="primary" onClick={this.searchHandle}>Search</Button>
      </div>
    )
  }
}
