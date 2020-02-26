import React from "react";
import { Link } from "react-router-dom";

import "./MenuBar.css";

const MenuBar = () => (
  <div className="menu-bar">
    <img className="logo" src="logo.png" alt="logo"></img>
    <div id="menu-bar-headline">Hangman leaderboards</div>
    <div id="menu-bar-refresh">
      <Link to="/">Refresh </Link>
    </div>
    
  </div>
);

export default MenuBar;
