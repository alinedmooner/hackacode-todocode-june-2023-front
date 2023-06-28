import React from 'react';

function Categories({ categories }) {

	return (
		<>
      <h2>{categories.name}</h2>
      <p>{categories.numberOfAttractions}</p>
			<ul>
				<li>
					{categories.attractions.map((attraction, index) => (
						<div key={index}>
							<h3>{attraction}</h3>
						</div>
					))}
				</li>
			</ul>
		</>
	);
}

export default Categories;