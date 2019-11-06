import React from 'react'

export default function PrintJoke(props) {
  console.log(props)
  
  return (
    <div>
   { props.joke ?
    <div className='joke'>
         <p>category: {props.joke.category}</p>
        {props.joke.type === 'single' ? <p>{props.joke.joke}</p>
            : <p> {props.joke.setup} <br /> {props.joke.delivery} </p>} 
        <p className="material-icons" style={{cursor: "pointer"}} onClick={(e)=>props.addFave(props.joke)}>favorite</p>
      </div> : false}
      
      </div>
  )
}
