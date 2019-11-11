
import React from 'react'
import { Form} from 'antd';
export default function Dropdown(props) {
  //return an array of item with their value
  const list = props.dropdownList.map((choice,index)=>{
    // check if the user was searching by genre
    if(props.searchWay ==='genre'){
      //if the user was in the manga section
      if(props.type === 'manga'){
        //if it was at index 36 from the array
        if(index === 36){
    return <option key={index} value={45}>{choice.text}</option>
        }
    }}
    //any other list come without the search way == genre it will return this
    return <option key={index} value={choice.value}>{choice.text}</option>
  })
    // check if the user was searching by genre
  if(props.searchWay ==='genre'){
      //if the user was in the anime section
  if(props.type === 'anime'){
    //remove the last item
    list.pop()
  }}
  return (
    <Form.Item>
      <form onChange={(e) => { props.dropdownHandle(e) }}>
    <select id="type">
      {list}
    </select>
    </form>
  </Form.Item>
  )
}

