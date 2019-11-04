import React from 'react'
import PrintAnime from './PrintAnime'
import PrintManga from './PrintManga'
import PrintCharacter from './PrintCharacter'
export default function printResult(props) {

  const results = props.results.map((result,index)=>{
    switch (props.type) {
      case 'anime':
      return <PrintAnime   searchWay={props.searchWay} result={result} key={index}/>
        case 'manga':
        return <PrintManga searchWay={props.searchWay} result={result} key={index}/>
        case 'character':
        return <PrintCharacter result={result} key={index}/>
    }
  })
  return (
    <div>
      {results}
    </div>
  )
}
