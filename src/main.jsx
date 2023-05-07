import React from 'react'
import ReactDOM from 'react-dom'
import { Hero, Navbar, MusicTest, MapPage, Login, About } from './components'
import App from './App'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route exact path="/" element={<React.Fragment><Navbar /><Hero /><App /></React.Fragment>} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/about" element={<About />} />
        <Route path="/music-test" element={<MusicTest />} />
        <Route path="/map" element={<MapPage />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
