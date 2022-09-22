import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getTemperaments, postDog } from "../Redux/actions";


const AddDog = () => {

const dispatch = useDispatch();
const temperaments = useSelector((state) => state.temperaments)

const [button,setButton] = useState(true);
const [errors,setErrors] = useState({
  name:'',
  min_height: "",
  max_height: "",
  min_weight: "",
  max_weight: "",
  life_span:  "",
  image: ""
})

const [form, setForm]

  return (

    <div>

    </div>
  );
};

export default AddDog;
