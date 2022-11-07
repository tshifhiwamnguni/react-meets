import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import classes from "./navBar.module.css";

import FavoriteContext from "../../../store/favorites-context";
function NavBar() {

  const favoriteCtx = useContext(FavoriteContext)
  return (
    <header className={`${classes.header} ${classes.container}`}>
        <div className={classes.logo}>meetUPs</div>
      <nav   >
        <ul className={`${classes.container}`}>
          <li>
            <Link to="/"> all meets</Link>
          </li>
          <li>
            <Link to="/new">add new meets </Link>
          </li>
          <li>
            <Link to="/fav"> fav meets 
            <span className={classes.badge}>{favoriteCtx.favoriteCount}</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;
