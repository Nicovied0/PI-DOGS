import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showDogDetails } from "../Redux/actions";

import style from "../Css/Details.module.css";
import Loader from "./Loader";

const Details = (props) => {
  const dispatch = useDispatch();
  let { id } = props.match.params;

  useEffect(() => {
    dispatch(showDogDetails(id));
  }, [dispatch, id]);

  const details = useSelector((state) => state.details);
  console.log(details);

  let nameDog,
    imageDog = [],
    heightDog,
    weightDog,
    lifeSpanDog;

  if (details[0]) {
    //una vez ya se hayan traido los datos renderizalos
    nameDog = details[0].name;
    imageDog = details[0].image;
    heightDog = details[0].height;
    weightDog = details[0].weight;
    lifeSpanDog = details[0].life_span;
  }
  if (!details) {
    return <h2>Error</h2>;
  } else if (details.length === 0 || details[0].id != id) {
    //utilizo el details en la posicion 0 id si es igual al valor del id pasado por params
    return <Loader />;
  } else {
    return (
      <div className={`${style.main_container}`}>
        <div className={`${style.sub_container}`}>
          <div className={`${style.container_elements}`}>
            <div className={`${style.image_container}`}>
              <img src={imageDog} alt={`imagen de ${nameDog}`} />
            </div>

            <div className={`${style.right_container}`}>
              <h1>{nameDog}</h1>
              <h3>{`Altura : ${heightDog && heightDog[0]} - ${
                heightDog && heightDog[1]
              } CM`}</h3>
              <h3>{`Peso : ${heightDog && weightDog[0]} - ${
                weightDog && weightDog[1]
              } KG`}</h3>
              <h3>{`Esperanza de vida : ${lifeSpanDog}`}</h3>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Details;
