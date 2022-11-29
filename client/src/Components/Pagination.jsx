import React from 'react'
import style from "../Css/Footer.module.css";

const Pagination = ({page,
  setPage,
  dogsPerPage,
  input,
  setInput}) => {

    function nextPage(){
      setInput (input + 1)
      setPage (page + 1);
  }
  
  function previousPage(){
      setInput (input - 1)
      setPage (page - 1);
  }
  
  return (
    <div className={style.footer_container}>
      <button disabled={page === 1 || page < 1} onClick={previousPage}> ⇠ </button>
      <div  className={style.div_secundary}>
        <p> {input} of {dogsPerPage}</p>
      </div>
      <button disabled={page> dogsPerPage || page === dogsPerPage} onClick={nextPage}> ⇢</button>
    </div>
  )
}

export default Pagination