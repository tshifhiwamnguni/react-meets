import classes from './MeetupItem.module.css'
import React from "react";
import Card from '../../ui/Card';
import { useContext } from 'react';
import FavoriteContext from '../../../store/favorites-context';



function MeetupItem(props) {

const favoriteCtx = useContext(FavoriteContext);
const itemIsFavorite = favoriteCtx.isFavorite(props.id)

  function toggleFavoriteStatusHandler(){
    if (itemIsFavorite) {
      favoriteCtx.removeFavorite(props.id)
    }else{
      favoriteCtx.addFavorite({
          id:props.id,
          image:props.image,
          title:props.title,
          address:props.address,
          description:props.description
      })
    }
  }
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
        <button onClick={toggleFavoriteStatusHandler} > {itemIsFavorite ? 'remove from favorite':'add to favorite'}</button>
      </div></Card>
    </li>
    
  );
}
export default MeetupItem;
