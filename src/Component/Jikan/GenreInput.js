import React from 'react'
import Dropdown from '../Dropdown/Dropdown'

export default function GenreInput(props) {
  return (
    <div>
    <Dropdown dropdownHandle={props.dropdownHandle} dropdownList={props.genre} searchWay={props.searchWay} type={props.type}/>
    <button onClick={props.searchHandle}>search</button>
    </div>
  )
}
