import React, { useState } from "react";
import style from "../Css/SearchBar.module.css";
// import search from "../Assets/search.svg";
import { getDogByName } from "../Redux/actions";
import { useDispatch } from "react-redux";

const SearchBar = ({setPage,setInput}) => {
  const dispatch = useDispatch();
  const [searchDog, setSearchDog] = useState("");

  
  const onSubmit = (e) => {
    e.preventDefault();
    if (searchDog.length === 0) return alert("Ingrese algun nombre");
    dispatch(getDogByName(searchDog));
    setSearchDog("")
    setPage(1)
    setInput(1)
    
  };
  const onChangeInput = (e) => {
    e.preventDefault();
    setSearchDog(e.target.value);
    

  };
  
  console.log(searchDog);
  return (
    <div className={style.searchbar_container}>
      <form className={style.form}>
        <input
          className={`${style.searchbar}`}
          type="text"
          onChange={onChangeInput}
          placeholder="Buscar..."
          value={searchDog}
        />
        <input
          className={`${style.searchbar_button}`}
          type="submit"
          onClick={onSubmit}
          value="Go"
        ></input>
      </form>
    </div>
  );
};

export default SearchBar;
