import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import VocabularyPractice from './pages/VocabularyPractice';
import ToeicPractice from './pages/ToeicPractice';
import IeltsPractice from './pages/IeltsPractice';
import Characters from './Characters';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/learn" element={<VocabularyPractice />} />
      <Route path="/learn/toeic" element={<ToeicPractice />} />
      <Route path="/learn/ielts" element={<IeltsPractice />} />
      <Route path="/characters" element={<Characters />} />
      <Route path="/character/:id" element={<Characters />} />
      <Route path="/characters/:id" element={<Characters />} />
      <Route path="/:id" element={<Characters />} />
    </Routes>
  );
}

export default App;

