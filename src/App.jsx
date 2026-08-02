import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Learn from './Learn';

function App() {
  const [vocabulary, setVocabulary] = useState([]);

  useEffect(() => {
    const baseUrl = import.meta.env.VITE_API_URL || 'http://localhost:9999';
    fetch(`${baseUrl}/api/vocabulary`)
      .then(res => res.json())
      .then(data => setVocabulary(data))
      .catch(err => console.error('Error fetching vocabulary:', err));
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Home vocabulary={vocabulary} />} />
      <Route path="/learn" element={<Learn vocabulary={vocabulary} />} />
    </Routes>
  );
}

export default App;
