import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Reviews from './components/Reviews';
import Visit from './components/Visit';
import Footer from './components/Footer';
import PoleBand from './components/PoleBand';
import MobileBar from './components/MobileBar';

function App() {
  return (
    <div className="App">
      <div className="barber-stripe" aria-hidden="true" />
      <Header />
      <main>
        <Hero />
        <PoleBand />
        <About />
        <Services />
        <Gallery />
        <Reviews />
        <PoleBand />
        <Visit />
      </main>
      <Footer />
      <MobileBar />
    </div>
  );
}

export default App;
