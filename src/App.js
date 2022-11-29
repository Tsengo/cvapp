import React from 'react';
import PictureSoc from './components/header/Picture_and_social';
import BackImg from './components/main/BackImg';
import Navigation from "./components/header/HeaderNav/Navigation";
import './App.css';

function App() {
  return (
    <div className='MainStyle row'>
      <div className='header'>
        <PictureSoc />
        <Navigation />
      </div>
      <BackImg />
    </div>
  )
}

export default App;