import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Reviews from './components/Reviews';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <div className="barber-stripe" aria-hidden="true" />
      <Header />
      <main>
        <Hero />
        <About />
        <Reviews />
      </main>
      <Footer />
    </div>
  );
}

export default App;
