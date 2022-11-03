import React from "react";
import { Link } from "react-router-dom";

import classes from "./navBar.module.css";
function NavBar() {
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
            <Link to="/fav"> fav meets</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;
