import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAllDogs } from "../Redux/actions";

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
    return (
      <div>
        <h2>Error 404</h2>
      </div>
    );
  } else if(allDogs.length) {
    return (
      
      <div>HOME</div>
    {
      allDogs?.map((e)=>{
        <div>
              <Link to={"/details/" + i.id}>
                <Card
                  name={i.name}
                  image={i.image}
                  nickName={i.nickName}
                  key={i.id}
                  id={i.id}
                ></Card>
              </Link>
            </div>
      })
    
      }
      )
  } else {
    return <h2>Cargando</h2>;
  }
};

export default Home;
