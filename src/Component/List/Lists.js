import React from 'react'
import ListItem from './ListItem'

export default function Lists(props) {
  const allItem = props.lists.map((item,index)=>{
    return <ListItem 
    // {...console.log(item)}
    item={item}
    deleteItem={()=>props.deleteItem(item)}
    markedItem={()=>props.markedItem(item)}
    isMarked={props.markedItems.includes(item)}
    key={index} />
  })
  return (
    <ul>
      {allItem}
    </ul>
  )
}
