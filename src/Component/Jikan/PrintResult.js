import React from 'react'
import PrintAnime from './PrintAnime'
import PrintManga from './PrintManga'
import PrintCharacter from './PrintCharacter'
import CardDeck from 'react-bootstrap/CardDeck'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import { Layout } from 'antd';
const { Content } = Layout;

export default function printResult(props) {

  const results = props.results.map((result, index) => {
    switch (props.type) {
      case 'anime':
        return <PrintAnime length={props.results.length} searchWay={props.searchWay} result={result} key={index} />
      case 'manga':
        return <PrintManga length={props.results.length} searchWay={props.searchWay} result={result} key={index} />
      case 'character':
        return <PrintCharacter length={props.results.length} result={result} key={index} />
    }
  })
  return (
    <Container >
      <Row style={{  margin: 10}}>
        <CardDeck>
          {results}
        </CardDeck>
      </Row>
    </Container>

  )
}
