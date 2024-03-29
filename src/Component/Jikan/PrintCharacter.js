import React, {useState} from 'react'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import Col from 'react-bootstrap/Col'
import Collapse from 'react-bootstrap/Collapse'
import Image from 'react-bootstrap/Image'


export default function PrintCharacter(props) {
  //for the Collapse
  const [open, setOpen] = useState(false);
  //for the style
  let md =0;
  {props.length > 1 ? props.length > 3 ? md=3 : md=5: md=12}
  return (
    props.result.hasOwnProperty("name") ?
    <Col md={md}>
        <Card  onClick={() => setOpen(!open)}
         aria-controls="body"
        aria-expanded={open}>
          <Image fluid src={props.result.image_url}/>

            <Card.Title>{props.result.name}</Card.Title>
            <Collapse in={open}>
<Card.Body id='body'>
            <ListGroup className="list-group-flush">

              <ListGroup.Item>alternative names: {props.result.alternative_names.map(name=>{
          return name 
        }).join(', ')}</ListGroup.Item>
              <ListGroup.Item>Appearance: {props.result.anime.map(anime=>{
                return anime.name}).join(', ')}</ListGroup.Item>
                
            </ListGroup> 
            </Card.Body>
            </Collapse>
            <Card.Body>
              <Card.Link href={props.result.url}>{props.result.name}</Card.Link>
              </Card.Body>
        </Card>
    </Col>
    : false
  )
}
