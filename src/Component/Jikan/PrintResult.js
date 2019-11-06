import React from 'react'
import PrintAnime from './PrintAnime'
import PrintManga from './PrintManga'
import PrintCharacter from './PrintCharacter'
import CardDeck from 'react-bootstrap/CardDeck'
import Row from 'react-bootstrap/Row'

export default function printResult(props) {

  const results = props.results.map((result, index) => {
    switch (props.type) {
      case 'anime':
        return <PrintAnime isThere={props.watchLater.includes(result)} toggleWatchLater={(e)=>props.toggleWatchLater(result,props.searchWay,props.type)} length={props.results.length} searchWay={props.searchWay} result={result} key={index} />
      case 'manga':
        return <PrintManga isThere={props.watchLater.includes(result)} toggleWatchLater={(e)=>props.toggleWatchLater(result,props.searchWay,props.type)} length={props.results.length} searchWay={props.searchWay} result={result} key={index} />
      case 'character':
        return <PrintCharacter  length={props.results.length} result={result} key={index} />
    }
  })
  return (
      <Row style={{  margin: 10}}>
        <CardDeck>
          {results}
        </CardDeck>
      </Row>

  )
}
