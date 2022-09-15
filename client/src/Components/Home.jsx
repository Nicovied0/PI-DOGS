import React from 'react'
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { Link } from "react-router-dom";
import {
  getAllDogs} from '../Redux/actions'



import Card from './Card'

const Home = () => {

  const dispatch = useDispatch();
  const allDogs = useSelector(state => state.dogs); //valores del estado global de redux que requiero

  useEffect(() => {
    //acciones a depachar luego de montar el componente
    dispatch(getAllDogs());
  }, [dispatch]);

  return (
    <div>Home

      <Card ></Card>
    </div>

  )
}

export default Home