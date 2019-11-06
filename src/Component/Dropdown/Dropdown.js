
import React from 'react'
import { Form} from 'antd';
export default function Dropdown(props) {
  const list = props.dropdownList.map((choice,index)=>{
    if(props.searchWay ==='genre'){
      if(props.type === 'manga'){
        if(index === 36){
    return <option key={index} value={45}>{choice.text}</option>
        }
    }}
    return <option key={index} value={choice.value}>{choice.text}</option>
  })
  if(props.searchWay ==='genre'){
  if(props.type === 'anime'){
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

