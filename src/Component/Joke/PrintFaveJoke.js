import React from 'react'

export default function PrintFaveJoke(props) {
  console.log(props)
  return (
    <div>
           <p>category: {props.faveJoke.category}</p> 
            {props.faveJoke.type === 'single' ? <p>{props.faveJoke.joke}</p>
            : <p> {props.faveJoke.setup} <br /> {props.faveJoke.delivery} </p>}
      </div>
  )
}
