import React from 'react';
import {Routes, Route, Link} from 'react-router-dom';
import Header from './Header/Header';
import Main from './Pages/Main';
import Footer from './Pages/Footer';

function App() {
  return (
    <div>
      <Header/>
      <Main/>  
      <h2>임시용</h2>
      <Footer/>    
    </div>
  );
}

export default App;
