import React from "react";
import { Link } from "react-router-dom";
import style from "../Css/Landing.module.css";

const LandingPage = () => {
  return (
    <div className={style.container}>
      <div className={style.divLanding}>
        <h1 className={style.title}>DOGS APP</h1>
        <Link to={"/home"}>
          <button className={style.butonLanding}>TO home</button>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
