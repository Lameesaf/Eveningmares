import React, { Component } from 'react'
import ListGroup from 'react-bootstrap/ListGroup'

export default class ListItem extends Component {
  constructor (props){
    super()
    this.state ={
      item : props.item
    }
  }
  //to edit the list item directly
  handleChange =(e)=>{
    this.setState({
      item: e.target.value
    })
  }
// call the delete function from ListInput component
  handleDelete=(e)=>{
    e.stopPropagation()
    this.props.deleteItem()
  }
  // handleFinishItem
//to compare the list with the new one
  shouldComponentUpdate(nextProps){
    //if the new list is not the same as the old one
    if(nextProps !== this.props)
    //update the list
    this.setState({
      item: nextProps.item
    })
    return true
  }
  render() {
    return (
      <ListGroup.Item className={(this.props.isMarked) ? 'done' : ''}>
        <input type='text' value={this.state.item} onChange={(e)=>this.handleChange(e)} />
        {/* <p className="material-icons" onClick={this.handleDelete}>delete_forever</p> */}
        <p className="material-icons" onClick={this.handleDelete}>close</p>
        <p className="material-icons" onClick={this.props.markedItem}>{(this.props.isMarked) ? 'done' : 'done_outline'}</p>

      </ListGroup.Item>
    )
  }
}
