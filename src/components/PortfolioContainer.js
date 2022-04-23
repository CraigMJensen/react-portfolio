import React, { useState } from 'react';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import About from './pages/About';
import Footer from '../components/Footer';
import Nav from './Nav';


function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('About');


  const renderPage = () => {
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    return <About />;
  };

  const handlePageChange = (page) => setCurrentPage(page);
  return (
    <div className='pageContainer'>
      <div className="App">
        <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
      </div>
      <div className="App-body">
        {renderPage()}
      </div>
      <div className='App-footer'>
        <Footer />
      </div>
    </div>
  );
}

export default PortfolioContainer;