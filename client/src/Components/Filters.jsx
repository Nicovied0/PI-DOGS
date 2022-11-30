import React from 'react'

const Filters = ({handleOrderByName,handleFilterByDB,handleFilterByTemperaments,handleOrderByWeight,allTemperaments}) => {
  return (
    <div>
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

          <select 
          onChange={(e) =>{
            handleFilterByDB(e)
          }}>
            <option disabled selected defaultValue>
              Filter by DB
            </option>
            <option value="ALL">ALL</option>
            <option value="DB">To DB</option>
          </select>

          <select 
          onChange={(e) => {
            handleFilterByTemperaments(e)
          }}
          >
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
  )
}

export default Filters