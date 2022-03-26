import React, { useState } from 'react';

function Nav() {
  const [categories] = useState([
    {
      name: 'About Me',
      description: 'A little information about me',
    },
    {
      name: 'Portfolio',
      description: 'My projects',
    },
    {
      name: 'Contact',
      description: 'Contact me',
    },
    {
      name: 'Resume',
      description: 'Professional Resume',
    },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <div className="list-links">
      <ul className="App-link">
        {categories.map((category) => (
          <li
            className={`${
              currentCategory.name === category.name && 'navActive'
            }`}
            key={category.name}
          >
            <span onClick={() => setCurrentCategory(category)}>
              {category.name}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Nav;
