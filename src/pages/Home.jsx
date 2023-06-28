import React from 'react';
import Categories from '../components/Categories';
import categories from '../data/categories';
import Attractions from '../components/Attractions';
import attractions from '../data/attractions';

function Home() {
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
	);
}

export default Home;