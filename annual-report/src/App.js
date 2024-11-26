import './App.css';
import Report from './pages/Report';
import Home from './pages/Home';
import Footer from './components/Footer';
import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  
  return (
    <Router>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/LearningAnnualReport" element={<Home />} />
          <Route path="/report" element={<Report />} />
        </Routes>
      </main>
      <Footer />
    </Router>

    
  );
}

export default App;
