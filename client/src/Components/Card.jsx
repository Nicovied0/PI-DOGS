import React from "react";

const Card = (image, name) => {
  return (
    <div>
      <div>
        <img src={`${image}`} alt={`imagen de: ${name}`} />
      </div>
      <h2>{name}</h2>
    </div>
  );
};

export default Card;
