import React from 'react';
import style from "../Css/Loader.module.css";

const Loader = () => {
  return (
    <div className={style.ldsEllipsis}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}

export default Loader