import React from 'react'

export default function PrintCharacter(props) {
  return (
    <div>
      <img src={props.result.image_url} alt=""/>
      <ul>
        <li>name: {props.result.name}</li>
        <li>alternative names: {props.result.alternative_names.forEach(name=>{
          return <li>{name}</li>
        })}</li>
        <li>Appearance: {props.result.anime.forEach(anime=>{return <li>{anime.name}</li>})}</li>
        <li>URL: <a href={props.result.url}>{props.result.name}</a></li>
      </ul>
    </div>
  )
}
