import React from 'react'
import ReactDOM from 'react-dom'
import { Hero, Navbar, MusicTest, MapPage, Login } from './components'
import App from './App'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './index.css'
import { AuthProvider } from './components/AuthContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <Router>
        <Routes>
          <Route exact path="/" element={<React.Fragment><Navbar /><Hero /><App /></React.Fragment>} />
          <Route exact path="/login" element={<Login />} />
          <Route path="/music-test" element={<MusicTest />} />
          <Route path="/map" element={<MapPage />} />
        </Routes>
      </Router>
    </AuthProvider>
  </React.StrictMode>
);
