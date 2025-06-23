// Exemplo básico de App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
// ... outros imports se tiver

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile/:id" element={<Profile />} />
        {/* Adicione outras rotas aqui se tiver */}
      </Routes>
    </Router>
  );
}

export default App;