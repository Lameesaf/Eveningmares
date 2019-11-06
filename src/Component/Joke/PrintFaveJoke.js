import React from 'react'

export default function PrintFaveJoke(props) {
  console.log(props)
  return (
    <div>
           <p>category: {props.joke.category}</p> 
            {props.joke.type === 'single' ? <p>{props.joke.joke}</p>
            : <p> {props.joke.setup} <br /> {props.joke.delivery} </p>}
      </div>
  )
}
