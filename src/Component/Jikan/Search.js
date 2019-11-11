import React, { Component } from 'react'
import axios from 'axios';
import { API_KEY } from '../../api'
import NameInput from './NameInput';
import TypeInputs from './TypeInputs';
import { Types, Genre } from '../Dropdown/DropdownDB'
import GenreInput from './GenreInput'
import SearchWay from './searchWay'
import PrintResult from './PrintResult'
import { Form } from 'antd';

export default class Search extends Component {

  constructor(props) {
    super()
    this.state = {
      name: '',
      type: 'anime',
      searchWay: 'name',
      genre: 1,
      result: []
    }
  }
  //update the text area box for the user
  handleNameChange = (e) => {
    this.setState({
      name: e.target.value
    })
  }
// take the type of search the user choose
  searchWayHandle = (e) => {
    this.setState({
      searchWay: e.target.value
    })
  }

  //take what type the user choose
  typeDropdownHandle = (e) => {
    this.setState({
      type: e.target.value,
      result: []
    })
    //if the user choose character make the search way automatically name
    if (e.target.value === 'character') {
      this.setState({
        searchWay: 'name'
      })
    }
  }
  //take what type the user choose
  genreDropdownHandle = (e) => {
    this.setState({
      genre: e.target.value,
      result: []
    })
  }
//bring the result from the API
  searchHandle = () => {
    //check for the search way to know which API to use
    const baseURL = this.state.searchWay === 'name'
      ? `${Types.url}${this.state.type}?q=${this.state.name}`
      : `${Genre.url}${this.state.type}/${this.state.genre}/1`
    console.log(this.state.searchWay)
    axios({
      method: 'GET',
      url: baseURL,
      headers: {
        'x-rapidapi-host': 'jikan1.p.rapidapi.com',
        'x-rapidapi-key': API_KEY
      }
    }).then(res => {
      // if the search way was by name
      if (this.state.searchWay === 'name') {
        if (this.state.type !== 'character') {
          this.setState(() => {
            const data = res.data.results.filter(res => {
              //only return the exact result
              if (res.title.toLowerCase().includes(this.state.name.toLowerCase())) {

                return res;
              }
            })
            return { result: data };
          })
        } else {
          console.log(res)
          //if the type was a character 
          this.setState(() => {
            const data = res.data.results.filter(res => {
              //only return the exact result
              if (res.name.toLowerCase().includes(this.state.name.toLowerCase())) {

                return res;
              }
            })
            return { result: data };
          })
        }
      }
      // if the search way was by genre
      else {
        this.setState({
          result: res.data[this.state.type]
        })
      }
    })
      .catch(error => {
        console.log(error)
      })
  }
  render() {
    return (
      <div>
        <Form layout='inline' style={{ textAlign: 'center' }}>

          <TypeInputs dropdownHandle={this.typeDropdownHandle} type={Types.type} />
          {/* if the type of search was not character go to search way component */}
          {this.state.type !== 'character'
            ? <SearchWay searchWay={this.state.searchWay} searchWayHandle={this.searchWayHandle} />
            : false}
            {/* if the search was by name go to name input if not go to genre input  */}
          {this.state.searchWay === 'name'
            ? <NameInput name={this.state.name} searchHandle={this.searchHandle} handleChange={this.handleNameChange} />
            : <GenreInput searchWay={this.state.searchWay} type={this.state.type} searchHandle={this.searchHandle} dropdownHandle={this.genreDropdownHandle} genre={Genre.genre} />}


        </Form>
        {/* if there is a result go print them */}
        {this.state.result.length > 0 ? <PrintResult watchLater={this.props.watchLater} toggleWatchLater={this.props.toggleWatchLater} type={this.state.type} searchWay={this.state.searchWay} results={this.state.result} /> : false}
      </div>
    )
  }
}
