import React, { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { showDogDetails } from "../Redux/actions"

import style from "../Css/Details.module.css";

const Details = () => {
  const dispatch = useDispatch();
  let { id } = useParams();

  useEffect(() => {
    dispatch(showDogDetails(id));
}, [dispatch, id]);

const details = useSelector((state) => state.details)
console.log(details);

let nameDog, imageDog = [], heightDog, weightDog, lifeSpanDog;

    if (details[0]) { //una vez ya se hayan traido los datos renderizalos
        nameDog = details[0].name;
        imageDog = details[0].image;
        heightDog = details[0].height;
        weightDog = details[0].weight;
        lifeSpanDog = details[0].life_span;

     
    }
        

  return (
    <div className={`${style.sub_container}`}>
      <h2>Card</h2>
      <div className={`${style.container_elements}`}>
        <div className={`${style.image_container}`}>
          <img src={imageDog} alt={`imagen de ${nameDog}`} />
        </div>

        <div className={`${style.right_container}`}>
          <h1>{nameDog}</h1>
          <h3>{`Height: ${heightDog && heightDog[0]} - ${
            heightDog && heightDog[1]
          } CM`}</h3>
          <h3>{`Weight: ${heightDog && weightDog[0]} - ${
            weightDog && weightDog[1]
          } KG`}</h3>
          <h3>{`Lifespan: ${lifeSpanDog}`}</h3>
          
        </div>
      </div>
    </div>
  );
};

export default Details
