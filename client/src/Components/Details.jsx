import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showDogDetails, removeDetail } from "../Redux/actions";
import { Link } from "react-router-dom";
import back from "../Assets/back.png";
import style from "../Css/Details.module.css";
import Loader from "./Loader";

const Details = (props) => {
  const dispatch = useDispatch();
  let { id } = props.match.params;

  useEffect(() => {
    dispatch(showDogDetails(id));
    return () => {
      dispatch(removeDetail()); //para cuando se desmonta el detail, q no quede cargada la info de la receta anterior.
    };
  }, [dispatch, id]);

  const details = useSelector((state) => state.details);
  // console.log(details);

  let nameDog,
    imageDog = [],
    temperaments,
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
    temperaments = details[0].temperaments
      ? details[0].temperaments
      : details[0].temperaments[0].name;
    // console.log(details[0].temperaments)
  }

  // let tempOfDB = []

  // if(typeof temperaments === "object"){
  //   for(var tem in temperaments){
  //     tempOfDB.push(tem)
  //   }
  // }

  // for(let i = 0; i < temperaments.length; i++){
  //   console.log(temperaments[i].name)
  // }
  // console.log(tempOfDB,'sot tem')
  // console.log(details.temperaments.name,'sot tem name')

  // console.log(details[0].temperaments.map(e => e.name))

  if (!details) {
    return <h2>Error</h2>;
  } else if (details.length === 0) {
    //utilizo el details en la posicion 0 id si es igual al valor del id pasado por params
    return <Loader />;
  } else {
    return (
      <div className={`${style.main_container}`}>
        <div className={`${style.sub_container}`}>
          <Link to={"/home/"}>
            <img alt="backIcon" src={back} className={`${style.imgBack}`} />
          </Link>
          <div>
            <div className={`${style.container_elements}`}>
              <div className={`${style.image_container}`}>
                <img src={imageDog} alt={`imagen de ${nameDog}`} />
              </div>

              <div className={`${style.right_container}`}>
                <h1>{nameDog}</h1>
                <h3>{`Height : ${heightDog && heightDog[0]} - ${
                  heightDog && heightDog[1]
                } CM`}</h3>
                <h3>{`Weight : ${heightDog && weightDog[0]} - ${
                  weightDog && weightDog[1]
                } KG`}</h3>
                <h3>{`Life span : ${lifeSpanDog}`}</h3>
                <h2>Temeraments</h2>
                <h3>
                  {temperaments[0].name === undefined
                    ? temperaments.map((temps) => `  ${temps}   `)
                    : temperaments.map((e) => e.name)}
                </h3>
                {console.log(temperaments[0].name, "soy y")}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Details;
