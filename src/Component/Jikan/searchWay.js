import React from 'react'

export default function searchWay(props) {
  return (
    <form onChange={(e)=>props.searchWayHandle(e)}>
      <label><input checked={props.searchWay === 'name'} type="radio" value='name'/>Name</label>
      <label><input checked={props.searchWay === 'genre'} type="radio" value='genre'/>Genre</label>
        </form>
  )
}
