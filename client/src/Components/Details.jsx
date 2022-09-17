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

let nameDog =[]
if (details[0]) { //una vez ya se hayan traido los datos renderizalos
  nameDog = details[0].name;
}

  return (
    <div className={`${style.sub_container}`}>
      <h1>{nameDog}</h1>
      <h2>id</h2>
    </div>
  );
};

export default Details
