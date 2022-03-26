import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <div className="App">
        <Header />
      </div>
      <div className="App-body">

      </div>
      <div className='App-footer'>
        <Footer />
      </div>
    </div>
  );
}

export default App;
