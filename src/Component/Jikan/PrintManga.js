import React from 'react'

export default function PrintManga(props) {

  
  return (
    <div>
      <img src={props.result.image_url} alt=""/>
      <ul>
        <li>title: {props.result.title}</li>
        <li>volumes: {props.result.volumes}</li>
        <li>score: {props.result.score}</li>
        <li>{props.searchWay === 'name'? `chapters: ${props.result.chapters}`
        : `genres: ${props.result.genres.map(genre=>{
          return genre.name
         }).join(',  ')}`}</li>
        <li>{props.searchWay==='name'
        
        ? props.result.publishing ? new Date(props.result.start_date).getFullYear() : `${new Date(props.result.start_date).getFullYear()} 
        - ${new Date(props.result.end_date).getFullYear()}`: new Date(props.result.publishing_start).getFullYear()}</li>
        <li>story: {props.result.synopsis}</li>
        <li>type: {props.result.type}</li>
        <li>URL: <a href={props.result.url}>{props.result.title}</a></li>
      </ul>
    </div>
  )
}
