import React, { useState } from "react";
import style from "../Css/SearchBar.module.css";
import search from "../Assets/search.svg";
import { getDogByName } from "../Redux/actions";
import { useDispatch } from "react-redux";

const SearchBar = () => {
  const dispatch = useDispatch();
  const [searchDog, setSearchDog] = useState("");

  const handleInput = (e) => {
    e.preventDefault();
    setSearchDog(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getDogByName(searchDog));
  };

  console.log(searchDog);
  return (
    <div className={style.searchbar_container}>
      <input
        className={`${style.searchbar}`}
        type="text"
        onChange={handleInput}
        placeholder="Search..."
      />
      <button
        className={`${style.searchbar_button}`}
        type="submit"
        onClick={handleSubmit}
      >
        <img src={search}></img>
      </button>
    </div>
  );
};

export default SearchBar;
