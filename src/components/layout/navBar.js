import React from "react";
import { Link } from "react-router-dom";

import classes from "./navBar.module.css";
function navBar() {
  return (
    <header className={`${classes.header} ${classes.containter}`}>
        <div className={classes.logo}>meetUPs</div>
      <nav   >
        <ul className={`${classes.containter}`}>
          <li>
            <Link to="/"> all meets</Link>
          </li>
          <li>
            <Link to="/new">new meets </Link>
          </li>
          <li>
            <Link to="/fav"> fav meeets</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default navBar;
