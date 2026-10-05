import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import MenuBoard from './components/MenuBoard';
import Chairs from './components/Chairs';
import SimonsCorner from './components/SimonsCorner';
import Reviews from './components/Reviews';
import FindUs from './components/FindUs';
import Footer from './components/Footer';
import MobileBar from './components/MobileBar';

function App() {
  return (
    <div className="App">
      <div className="barber-stripe" aria-hidden="true" />
      <Header />
      <main>
        <Hero />
        <MenuBoard />
        <Chairs />
        <SimonsCorner />
        <Reviews />
        <FindUs />
      </main>
      <div className="awning" aria-hidden="true" />
      <Footer />
      <MobileBar />
    </div>
  );
}

export default App;
