import React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllDogs, OrderByName } from "../Redux/actions";
import { Link } from "react-router-dom";
import style from "../Css/Home.module.css";

import Loader from "./Loader";
import Card from "./Card";
import NavBar from "./NavBar";
import Footer from "./Footer";

const Home = () => {
  const dispatch = useDispatch();
  const allDogs = useSelector((e) => e.dogs); //valores del estado global de redux que requiero
  // const allTemperaments = useSelector((state) => state.temperaments);

  //estados para ordenar
  const [orden, setOrden] = useState("");

  useEffect(() => {
    //acciones a depachar luego de montar el componente
    dispatch(getAllDogs());
  }, [dispatch]);

  //ordenar por nombre
  const handleOrderByName = (e) => {
    e.preventDefault();
    dispatch(OrderByName(e.target.value));
    setOrden(`Ordenado ${e.target.value}`);
  };

  if (!allDogs) {
    return <h2>Error 404</h2>;
  } else if (allDogs.length) {
    console.log("este es el array", allDogs);
    return (
      <div className={style.home}>
        <NavBar />

        <div className={`${style.container_filters}`}>
          <select onChange={handleOrderByName}>
            <option disabled selected defaultValue>
              Alphabetical order
            </option>
            <option value="A-Z">A-Z</option>
            <option value="Z-A">Z-A</option>
          </select>

          <select>
            <option disabled selected defaultValue>
              Filter by weight
            </option>
            <option value="max_weight">Max</option>
            <option value="min_weight">Min</option>
          </select>
          <select>
            <option disabled selected defaultValue>
              Temperamentos
            </option>
            <option value="Todos">Todos</option>
            {/* {
                    allTemperaments?.map(temp => (
                        <option value={temp.name}  key={temp.id}>{temp.name}</option>
                    ))
                  } */}
          </select>
        </div>
        <div className={style.footerDiv}>
          <Footer className={style.footerDiv} />
        </div>

        <div className={style.containerBox}>
          {allDogs?.map((i) => {
            return (
              <div className={style.containerCard}>
                <div>
                  <Link to={"/details/" + i.id}>
                    {
                      <Card
                        name={i.name}
                        image={i.image}
                        key={i.id}
                        id={i.id}
                      ></Card>
                    }
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    return <Loader />;
  }
};

export default Home;
