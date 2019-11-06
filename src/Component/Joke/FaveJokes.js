import React from 'react'
import PrintFaveJoke from './PrintFaveJoke'

export default function FaveJokes(props) {
  console.log(props)
  const allFave = props.faveJoke.map((joke,index)=>{
    return <PrintFaveJoke joke={joke} key={index}/>
  })
  return (
    <div>
           {allFave}
      </div>
  )
}
