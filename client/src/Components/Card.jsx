import React from "react";
import style from "../Css/Card.module.css";

const Card = ({ image, name }) => {
  return (
    <div className={style.main_container}>
      <div className={style.image_container}>
        <img
          className={style.img}
          src={`${image}`}
          alt={`imagen de: ${name}` }
          
        />
        <h2>{name}</h2>
      </div>
      
      
    </div>
  );
};

export default Card;
