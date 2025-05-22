import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Dev from './pages/Dev';
import Zee from './pages/Zee';
import Dea from './pages/Dea';
import Alie from './pages/Alie';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/dev" element={<Dev />} />
        <Route path="/dev/zee" element={<Zee />} />
        <Route path="/dev/dea" element={<Dea />} />
        <Route path="/dev/alie" element={<Alie />} />
      </Routes>
    </Router>
  );
}

export default App;
