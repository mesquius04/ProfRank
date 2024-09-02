import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Profile from './Profile';
import Explore from './Explore';
import Ranking from './Ranking';
import Settings from './Settings';
import MySpace from './MySpace';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/profile" element={<Profile />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/myspace" element={<MySpace />} />
        <Route path="/ranking" element={<Ranking />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/" element={<MySpace />} />  {/* Ruta por defecto */}
      </Routes>
    </Router>
  );
}

export default App;
