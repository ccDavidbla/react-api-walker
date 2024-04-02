import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SwapiSearch from './components/SwapiSearch';
import ForIdSearch from './components/ForIdSearch';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SwapiSearch />} />
        <Route path="/:id" element={<ForIdSearch />} />
      </Routes>
    </Router>
  );
}

export default App;
