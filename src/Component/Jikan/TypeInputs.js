import React from 'react'
import Dropdown from '../Dropdown/Dropdown'
export default function TypeInputs(props) {
  return (
    <div>
    <Dropdown type='Choose category' dropdownHandle={props.dropdownHandle} dropdownList={props.type}/>
    </div>
  )
}
