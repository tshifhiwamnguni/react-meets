import React from 'react'
import classes from './Card.module.css'
function Card(props) {
  return (
    <div className={`${classes.card} ${classes.grow}`}>
        {props.children}
    </div>
  )
}

export default Card