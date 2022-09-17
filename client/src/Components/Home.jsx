import React from "react";
// import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllDogs } from "../Redux/actions";
import style from "../Css/Home.module.css";

import Card from "./Card";

const Home = () => {
  const dispatch = useDispatch();
  const allDogs = useSelector((e) => e.dogs); //valores del estado global de redux que requiero
  // const allTemperaments = useSelector((state) => state.temperaments);

  useEffect(() => {
    //acciones a depachar luego de montar el componente
    dispatch(getAllDogs());
  }, [dispatch]);

  if (!allDogs) {
    return <h2>Error 404</h2>;
  } else if (allDogs.length) {
    console.log("este es el array", allDogs);
    return (
      <div className={style.home}>
        <h1>Home app</h1>
        <div className={style.containerBox}>
          {allDogs?.map((i) => {
            return (
              <div className={style.containerCard}>
                <div>
                  <Card
                    name={i.name}
                    image={i.image}
                    key={i.id}
                    id={i.id}
                  ></Card>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    return (
      <div className={style.ldsEllipsis}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    );
  }
};

export default Home;
