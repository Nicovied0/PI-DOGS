import React from "react";
import style from "../Css/NavBar.module.css";
import logo from "../Assets/logo.jpg";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";

const NavBar = ({setPage,setInput}) => {

  return (
    <div className={style.containerDiv}>
      <div className={style.logoDiv}>
        <img alt="logo" src={logo} className={style.logo} />
        <h1>DOG APP</h1>
      </div>
      <div className={style.logoDiv}>
        <SearchBar setPage={setPage} setInput={setInput}/>
      </div>
      <div className={style.logoDiv}>
        <Link to={'/dog'}><button>Create Dog</button></Link>
      </div>
    </div>
  );
};

export default NavBar;
