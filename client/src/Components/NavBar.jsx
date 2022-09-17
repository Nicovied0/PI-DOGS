import React from "react";
import style from "../Css/NavBar.module.css";
import logo from '../Assets/logo.jpg'

const NavBar = () => {
  return (
    <div className={style.containerDiv}>
      <div className={style.logoDiv}>
        <img alt='logo' src={logo} className={style.logo}/>
        <h1>DOG APP</h1>
      </div>
      <div>
        <h2>SearchBar</h2>
      </div>
      <div>
       <select></select>
       <select></select>
       <select></select>
      </div>
    </div>
  );
};

export default NavBar;
