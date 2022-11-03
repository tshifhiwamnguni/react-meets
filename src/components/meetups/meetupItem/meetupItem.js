import classes from './MeetupItem.module.css'
import React from "react";
import Card from '../../ui/Card';

function MeetupItem(props) {
  return (
    
    
    <li className={classes.container} ><Card>
      <div className={classes.image}>
        <img className={classes.mage}  src={props.image} alt=""/>
      </div>
      <div className={classes.content}>
        <h3 > {props.title}</h3>
        <address > {props.address}</address>
        <p>
            {props.description}
        </p>
      </div>
      <div className={classes.actions}>
        <button> add to favorite</button>
      </div></Card>
    </li>
    
  );
}
export default MeetupItem;
