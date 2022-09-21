import React from "react";
import style from "../Css/NavBar.module.css";
import logo from "../Assets/logo.jpg";
import SearchBar from "./SearchBar";

const NavBar = () => {
  return (
    <div className={style.containerDiv}>
      <div className={style.logoDiv}>
        <img alt="logo" src={logo} className={style.logo} />
        <h1>DOG APP</h1>
      </div>
      <div className={style.logoDiv}>
        <SearchBar />
      </div>
      <div className={style.logoDiv}>
        <select></select>
        <select></select>
        <select></select>
      </div>
    </div>
  );
};

export default NavBar;
