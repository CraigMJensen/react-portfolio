import React from 'react';


function Nav() {
  const categories = [
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
  ];

  function categorySelected(name) {
    console.log(`${name} clicked`);
  }
  return (
    <div className='list-links'>
      
      <ul className='App-link'>
        {categories.map((category) => (
          <li
          key={category.name}
          >
            <span onClick={() => categorySelected(category.name)}>
              {category.name}
            </span>
          </li>
        ))}
      </ul>
      
    </div>
  );
}

export default Nav;
