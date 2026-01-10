import React from 'react';
import InfoBar from './components/InfoBar';
import Hero from './components/Hero';
import About from './components/About';
import Gallery from './components/Gallery';
import Reviews from './components/Reviews';
import Info from './components/Info';

function App() {
  return (
    <div className="App">
      <InfoBar />
      <Hero />
      <About />
      <Gallery />
      <Reviews />
      <Info />
    </div>
  );
}

export default App;
