import React from 'react';
import Nav from '../Nav';
// import coverImage from '../../images/technology-background.jpg';


function Header() {
  return(
    <header className='App-header'>
      {/* <img src={coverImage} className="my-2" style={{ width: "100%"  }} alt="cover" /> */}
      <h1>Craig Jensen</h1>
      

      <Nav />
      
    </header>
  )
}

export default Header;