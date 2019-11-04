import React, { Component } from 'react'

export default class ListItem extends Component {
  constructor (props){
    super()
    this.state ={
      item : props.item
    }
  }
  handleChange =(e)=>{
    this.setState({
      item: e.target.value
    })
  }

  handleDelete=(e)=>{
    e.stopPropagation()
    this.props.deleteItem()
  }
  // handleFinishItem

  shouldComponentUpdate(nextProps){
    if(nextProps !== this.props)
    this.setState({
      item: nextProps.item
    })
    return true
  }
  render() {
    return (
      <li>
        <input type='text' value={this.state.item} onChange={(e)=>this.handleChange(e)}/>
        {/* <p className="material-icons" onClick={this.handleDelete}>delete_forever</p> */}
        <p className="material-icons" onClick={this.handleDelete}>close</p>
        <p className="material-icons" onClick={this.props.markedItem}>{(this.props.isMarked) ? 'done' : 'done_outline'}</p>

      </li>
    )
  }
}
