import React from 'react'
import { Form, Input, Button } from 'antd';

export default function NameInput(props) {
  return ( 
    <div>
  <Form.Item >
  <Input value={props.name} onChange={(e)=>props.handleChange(e)}/>
</Form.Item>
<Form.Item>
  <Button onClick={(e)=>props.searchHandle(e)} type="primary">Search</Button>
  </Form.Item></div>
  )
}
