import classes from './MeetupList.module.css'
import React from "react";

function MeetupItem(props) {
  console.log('2nd ', props);
  return (
    <li className={classes.container} >
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
      <div className={classes.action}>
        <button> add to favorite</button>
      </div>
    </li>
  );
}
export default MeetupItem;
