import React from "react";
import style from "../Css/NavBar.module.css";
import logo from "../Assets/logo.jpg";
import SearchBar from "./SearchBar";

const NavBar = () => {
  return (
    <div className={style.containerDiv}>
      <div className={style.logoDiv}>
        <img alt="logo" src={logo} className={style.logo} />
        <h1>DOG APP</h1>
      </div>
      <div className={style.logoDiv}>
        <SearchBar />
      </div>
      <div className={style.logoDiv}>
        <select>
          <option disabled selected defaultValue>
            Orden Alfabético
          </option>
          <option value="A-Z">A-Z</option>
          <option value="Z-A">Z-A</option>
        </select>
        <select>
          <option disabled selected defaultValue>
            Filtrar por peso
          </option>
          <option value="max_weight">Max</option>
          <option value="min_weight">Min</option>
        </select>
        <select>
        <option disabled selected defaultValue>Temperamentos</option>
                  <option value="Todos">Todos</option>
                  {/* {
                    allTemperaments?.map(temp => (
                        <option value={temp.name}  key={temp.id}>{temp.name}</option>
                    ))
                  } */}
        </select>
      </div>
    </div>
  );
};

export default NavBar;
