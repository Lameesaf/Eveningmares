import React from 'react'

export default function NameInput(props) {
  return (
    <div>
        <input type='text' value={props.name} onChange={(e)=>props.handleChange(e)}/>  
        <button onClick={(e)=>props.searchHandle(e)}>Search</button>      
      
    </div>
  )
}
