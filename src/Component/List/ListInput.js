import React, { Component } from 'react'
import Lists from './Lists'
// import { Button } from 'react-bootstrap';
import { Button } from 'antd';

export default class ListInput extends Component {

  constructor(props) {
    super()
    this.state = {
      lists: [],
      textArea: '',
      markedItems: []
    }
  }
//delete single item from the list (the item was clicked)
  handleDelete = (item)=>{
    console.log(item)
    //get the list items
    const updatedList = this.state.lists
    //get the index of the clicked item
    const index = updatedList.indexOf(item)
    //delete the clicked item
    updatedList.splice(index,1)
    console.log(updatedList)
    //update the list
    this.setState({
      lists: updatedList
    })
    console.log(this.state.lists)

  }
  //check if the list item is marked or not and toggle it
  handleFinishItem=(markedItem)=>{
    //make a copy of the marked items
    const markedItems = [...this.state.markedItems]
    //get the index of the clicked item
    const index = markedItems.indexOf(markedItem)
    console.log('const ',markedItems)
    //check if the item is already marked
    //enter if it is exists 
    if(index!==-1){
      //unmarked the clicked item
      markedItems.splice(index,1)
      this.setState({markedItems})
    console.log('state ',this.state.markedItems)
      //if the clicked item was unmarked
    }else{
      //mark the clicked item
      this.setState({
        markedItems: [...this.state.markedItems,markedItem]
      })
    }
  }
  //update the text area box for the user
  handleChange = (e) => {
    // console.log(e.target.value)
    this.setState({
      textArea: e.target.value
    })
  }
//add the input to the list
  handleClick = (e) => {
    // console.log(e.target.value)
    e.preventDefault()
    //delete the space on the end also main you can't add an empty item
    if (this.state.textArea.trim() !== '') {
      this.setState({
        lists: [...this.state.lists, this.state.textArea],
        textArea: ''
      })
    }
  }
  //remove all item from the list
  clearList = (e) => {
    this.setState({
      lists: []
    })
  }
//remove only rhe marked item
  clearMarkedItem=(e)=>{
    //gets the unmarked item
    const unmarkedItem = this.state.lists.filter(item=>{
      if(!this.state.markedItems.includes(item)){
        return item
      }
    })
    //update the list to only have the unmarked item
    this.setState({
      lists: unmarkedItem
    })
  }
  render() {
    return (
      <div className='list'>
        <Lists lists={this.state.lists} 
        deleteItem = {this.handleDelete} 
        markedItem={this.handleFinishItem}
        markedItems={this.state.markedItems}
        />
        <form className='form'>
          <input type='text' value={this.state.textArea} onChange={(e) => this.handleChange(e)} />
          <Button className='button'  type='primary' onClick={(e) => this.handleClick(e)}>one more</Button>
        </form>
        <Button className='button'  type="primary"  onClick={(e) => this.clearMarkedItem(e)}>clear marked</Button>
        <Button className='button' type="dashed"  onClick={(e) => this.clearList(e)}>Finished the list!</Button>
      </div>
    )
  }
}
