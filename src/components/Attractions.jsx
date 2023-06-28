import React from 'react'

function Attractions ({ attractions }) {
  return (
    <>
      <h2>{attractions.name}</h2>
      <h3>{attractions.price}</h3>
      <p>{attractions.description}</p>
      <p>
        Starting time:
        {attractions.startTime}
      </p>
      <p>
        Ending time:
        {attractions.endTime}
      </p>
      <h3>
        Category:
        {attractions.category}
      </h3>
      <img src={attractions.image} alt={attractions.name} width="400px" height="300px" />
    </>
  )
}

export default Attractions
