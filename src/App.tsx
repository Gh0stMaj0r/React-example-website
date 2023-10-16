import React from 'react';
import './App.css';

import Header from './Components/Header/Header'
import Landing from './Components/Landing-page/Landing'
import Page2 from './Components/Second-page/Page2'
import Stats from './Components/Stats-element/Stats'
import Afterstats from './Components/Afterstats/Element'
import Customers from './Components/Customers-page/Customers'
import Marketing from './Components/Marketing-page/Marketing'
import Footer from './Components/Footer-end/Footer'

export default function App() {
  return (
      <>
      <Header/>

      <Landing/>

      <Page2/>

      <Stats/>

      <Afterstats/>

      <Customers/>

      <Marketing/>

      <Footer/>
      </>
  );

}

