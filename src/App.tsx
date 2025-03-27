import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Momentos from './components/Momentos';
import Posts from './components/Posts';
import Footer from './components/Footer';
import Jornal from './pages/Jornal';
import Accessibility from './components/Accessibility';
import './App.css';

const Home: React.FC = () => {
  return (
    <>
      <main>
        <Hero />
        <Momentos />
        <Posts />
      </main>
      <Footer />
    </>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/jornal" element={<Jornal />} />
        </Routes>
        <Accessibility />
      </div>
    </Router>
  );
};

export default App; 