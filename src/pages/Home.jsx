import React, { useState, useEffect } from 'react'
import Categories from '../components/Categories'
import Attractions from '../components/Attractions'

function Home () {
  const [categories, setCategories] = useState([])
  const [attractions, setAttractions] = useState([])

  useEffect(() => {
    fetch('http://localhost:6173/api/categories')

      .then((response) => response.json())
      .then((data) => {
        setCategories(data)
      })
  }, [])

  useEffect(() => {
    fetch('http://localhost:6173/api/attractions')

      .then((response) => response.json())
      .then((data) => {
        setAttractions(data)
      })
  }, [])

  return (
    <>
      <nav>navigation</nav>
      <main>
        <h1>Home</h1>
        {categories.map((category) => (
          <Categories key={category.name} categories={category} />
        ))}
        {attractions.map((attraction) => (
          <Attractions key={attraction.name} attractions={attraction} />
        ))}
      </main>
      <footer>footer</footer>
    </>
  )
}

export default Home
