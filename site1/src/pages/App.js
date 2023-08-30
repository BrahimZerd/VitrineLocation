import React from 'react';
import '../App.css';
import { fetchApi } from '../services/API';
import { HeaderRent } from '../components/header';
import { Hero } from '../components/hero';
import { Slicer } from '../components/slicer';
function App() {
  //fetchApi()
  return (
      <>
      <HeaderRent />
      <Hero />
      <Slicer />
      
      </>
  );
}

export default App;
