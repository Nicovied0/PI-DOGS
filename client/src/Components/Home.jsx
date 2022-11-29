import React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllDogs, OrderByName, getTemperaments,getDogByWeight,removeDetail,setLoading } from "../Redux/actions";
import { Link } from "react-router-dom";
import style from "../Css/Home.module.css";

import Loader from "./Loader";
import Card from "./Card";
import NavBar from "./NavBar";
import Pagination from "./Pagination";

const Home = () => {
  const dispatch = useDispatch();
  const allDogs = useSelector((e) => e.dogs); //valores del estado global de redux que requiero
  const allTemperaments = useSelector((state) => state.temperaments);

  //Paginado
  const [page, setPage] = useState(1)
  const [forPage] = useState(8) //cantidad de perros por pagina 
  const [input, setInput] = useState(1)
  const max = Math.ceil(allDogs.length / forPage); // 
  //estados para ordenar
  const [orden, setOrden] = useState("");

  useEffect(() => {
    //acciones a depachar luego de montar el componente
    dispatch(getAllDogs());
    dispatch(getTemperaments())
    return () => {
      dispatch(removeDetail());
      dispatch(setLoading());
    }
  }, [dispatch]);

  //ordenar por nombre
  const handleOrderByName = (e) => {
    e.preventDefault();
    dispatch(OrderByName(e.target.value));
    setPage(1)
    setInput(1)
    setOrden(`Ordenado ${e.target.value}`);
  };

  const handleOrderByWeight = (e) => {
    e.preventDefault();
    dispatch(getDogByWeight(e.target.value));
    setPage(1)
    setInput(1)
    setOrden(`Ordenado ${e.target.value}`);
    // console.log(e.target.value)
  };

  if (!allDogs) {
    return <h2>Error 404</h2>;
  } else if (allDogs.length) {
    console.log("este es el array", allDogs);
    return (
      <div className={style.home}>
        <NavBar setPage={setPage} setInput={setInput}/>

        <div className={`${style.container_filters}`}>
          <select onChange={(e) =>{
            handleOrderByName(e)
          }}>
            <option disabled selected defaultValue>
              Alphabetical order
            </option>
            <option value="A-Z">A-Z</option>
            <option value="Z-A">Z-A</option>
          </select>

          <select 
          onChange={(e) =>{
            handleOrderByWeight(e)
          }}>
            <option disabled selected defaultValue>
              Filter by weight
            </option>
            <option value="MAX_WEIGHT">Max</option>
            <option value="MIN_WEIGHT">Min</option>
          </select>
          <select>
            <option disabled selected defaultValue>
              Temperaments
            </option>
            <option value="ALL">All</option>
            {
                    allTemperaments?.map(temp => (
                        <option value={temp.name}  key={temp.id}>{temp.name}</option>
                    ))
                  }
          </select>
        </div>
        <div className={style.footerDiv}>
          <Pagination className={style.footerDiv} 
          page={page}
          setPage={setPage}
          dogsPerPage={max}
          input={input}
          setInput={setInput} />
        </div>

        <div className={style.containerBox}>
       
          {allDogs && allDogs
          .slice((page -1) * forPage, (page -1) * forPage + forPage).map((i) => {
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
                        temperaments={i.temperaments}
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
