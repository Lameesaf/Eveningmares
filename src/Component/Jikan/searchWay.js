import React from 'react'
import { Form, Radio } from 'antd';

export default function searchWay(props) {
  return (
    <Form.Item  >
            <Radio.Group defaultValue="name" onChange={(e)=>props.searchWayHandle(e)}>
              <Radio.Button value="name">Name</Radio.Button>
              <Radio.Button value="genre">Genre</Radio.Button>
            </Radio.Group>
          </Form.Item>

  )
}
