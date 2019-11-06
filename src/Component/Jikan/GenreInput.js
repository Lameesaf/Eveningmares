import React from 'react'
import Dropdown from '../Dropdown/Dropdown'
import { Form, Button } from 'antd';


export default function GenreInput(props) {
  return (
    <div>
    <Dropdown type='Choose Genre' dropdownHandle={props.dropdownHandle} dropdownList={props.genre} searchWay={props.searchWay} types={props.type}/>
    <Form.Item >
  <Button md='small' onClick={props.searchHandle} type="primary">Search</Button>
  </Form.Item>
    </div>
  )
}
