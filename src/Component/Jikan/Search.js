import React, { Component } from 'react'
// import dotenv from 'dotenv';
import axios from 'axios';
import { API_KEY } from '../../api'
import NameInput from './NameInput';
import TypeInputs from './TypeInputs';
import { Types, Genre } from '../Dropdown/DropdownDB'
import GenreInput from './GenreInput'
import SearchWay from './searchWay'
import PrintResult from './PrintResult'
// dotenv.config()


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

  handleNameChange = (e) => {
    this.setState({
      name: e.target.value
    })
  }

  searchWayHandle = (e) => {
    this.setState({
      searchWay: e.target.value
    })
  }

  typeDropdownHandle = (e) => {
    this.setState({
      type: e.target.value
    })
    if (e.target.value === 'character') {
      this.setState({
        searchWay: 'name'
      })
    }
  }

  genreDropdownHandle = (e) => {
    this.setState({
      genre: e.target.value
    })
  }

  searchHandle = () => {
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
      if (this.state.searchWay === 'name') {
        if (this.state.type !== 'character') {
          this.setState((prevState) => {
            const data = res.data.results.filter(res => {
              if (res.title.toLowerCase().includes(prevState.name.toLowerCase())) {

                return res;
              }
            })
            return { result: data };
          })
        }else{
          console.log(res)
          this.setState((prevState) => {
            const data = res.data.results.filter(res => {
              if (res.name.toLowerCase().includes(prevState.name.toLowerCase())) {

                return res;
              }
            })
            return { result: data };
          })
        }

      }


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
        <TypeInputs dropdownHandle={this.typeDropdownHandle} type={Types.type} />
        {this.state.type !== 'character'
          ? <SearchWay searchWay={this.state.searchWay} searchWayHandle={this.searchWayHandle} />
          : false}
        {this.state.searchWay === 'name'
          ? <NameInput name={this.state.name} searchHandle={this.searchHandle} handleChange={this.handleNameChange} />
          : <GenreInput searchWay={this.state.searchWay} type={this.state.type} searchHandle={this.searchHandle} dropdownHandle={this.genreDropdownHandle} genre={Genre.genre} />}

        {this.state.result.length > 0 ? <PrintResult type={this.state.type} searchWay={this.state.searchWay} results={this.state.result} /> : false}
      </div>
    )
  }
}
