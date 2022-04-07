import React from 'react';

function Nav({ currentPage, handlePageChange }) {
  return (
    <header className="App-header">
      <h1 className='h1'>Craig Jensen</h1>
      <div className="list-links">
        <ul className="App-link">
          <li className="nav-item">
            <a
              href="#about"
              onClick={() => handlePageChange('About')}
              className={
                currentPage === 'About' ? 'nav-link active' : 'nav-link'
              }
            >
              About
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#Portfolio"
              onClick={() => handlePageChange('Portfolio')}
              className={
                currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'
              }
            >
              Portfolio
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#contact"
              onClick={() => handlePageChange('Contact')}
              className={
                currentPage === 'Contact' ? 'nav-link active' : 'nav-link'
              }
            >
              Contact
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#resume"
              onClick={() => handlePageChange('Resume')}
              className={
                currentPage === 'Resume' ? 'nav-link active' : 'nav-link'
              }
            >
              Resume
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Nav;
