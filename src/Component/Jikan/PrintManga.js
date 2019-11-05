import React, {useState} from 'react'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import Col from 'react-bootstrap/Col'
import Collapse from 'react-bootstrap/Collapse'
import Image from 'react-bootstrap/Image'

export default function PrintManga(props) {

  const [open, setOpen] = useState(false);
  
  let md =0;
  {props.length > 3 ? md=3 : md=5}
  return (
    <Col md={md}  >
        <Card  onClick={() => setOpen(!open)}
         aria-controls="body"
        aria-expanded={open}>
          <Image fluid src={props.result.image_url}/>
            <Card.Title>{props.result.title}</Card.Title>
            <Collapse in={open}>

<Card.Body id='body'>
              <Card.Text>{props.result.synopsis} </Card.Text>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>volumes: {props.result.volumes}</ListGroup.Item>
              <ListGroup.Item>score: {props.result.score}</ListGroup.Item>
              <ListGroup.Item>{props.result.hasOwnProperty('chapters') ? `chapters: ${props.result.chapters}` : `genre: ${props.result.genres.map(genre => {
                return genre.name
              }).join(',  ')}`}</ListGroup.Item>
              <ListGroup.Item>{props.searchWay === 'name'
                ? props.result.publishing  ? new Date(props.result.start_date).getFullYear() : `${new Date(props.result.start_date).getFullYear()} - ${new Date(props.result.end_date).getFullYear()}`
                : new Date(props.result.publishing_start).getFullYear()}</ListGroup.Item>
              <ListGroup.Item>{props.result.type}</ListGroup.Item>
            </ListGroup> 
              <Card.Link href={props.result.url}>{props.result.title}</Card.Link>
            </Card.Body>
            </Collapse>
        </Card>
    </Col>
  )
}
