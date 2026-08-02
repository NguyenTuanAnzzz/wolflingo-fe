import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Learn from './Learn';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/learn" element={<Learn />} />
    </Routes>
  );
}

export default App;
