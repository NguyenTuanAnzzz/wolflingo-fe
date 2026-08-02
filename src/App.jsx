import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Learn from './Learn';
import Characters from './Characters';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/learn" element={<Learn />} />
      <Route path="/characters" element={<Characters />} />
      <Route path="/character/:id" element={<Characters />} />
      <Route path="/characters/:id" element={<Characters />} />
      <Route path="/:id" element={<Characters />} />
    </Routes>
  );
}

export default App;
