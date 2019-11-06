import React from 'react'
import PrintAnime from '../PrintAnime'
import PrintManga from '../PrintManga'
import CardDeck from 'react-bootstrap/CardDeck'
import Row from 'react-bootstrap/Row'

export default function WatchLater(props) {
  console.log(props)
  const watchLater = props.watchLater.map((movie, index) => {
    switch (props.type) {
      case 'anime':
        return <PrintAnime isThere={props.watchLater.includes(movie)} toggleWatchLater={(e)=>props.toggleWatchLater(movie,props.searchWay,props.type)} length={props.watchLater.length} searchWay={props.searchWay} result={movie} key={index} />
      case 'manga':
        return <PrintManga isThere={props.watchLater.includes(movie)} toggleWatchLater={(e)=>props.toggleWatchLater(movie,props.searchWay,props.type)} length={props.watchLater.length} searchWay={props.searchWay} result={movie} key={index} />
    }
  })
  return (
      <Row style={{  margin: 10}}>
        <CardDeck>
          {console.log(watchLater)}
          {watchLater}
        </CardDeck>
      </Row>

  )
}
