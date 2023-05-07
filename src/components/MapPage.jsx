import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import RealMap from './RealMap';

function MapPage() {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);

  const handleHomeClick = () => {
    navigate('/');
    setShowMenu(false);
  };

  const handleMusicClick = () => {
    navigate('/music-test');
    setShowMenu(false);
  };

  const handleAboutClick = () => {
    navigate('/about');
    setShowMenu(false);
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div>
      <div style={{ backgroundColor: '#55286f', width: '100%', padding: '15px', paddingBottom: '20px' }}>
        <div className="flex justify-between items-center">
          <h1 className="text-mont text-3xl text-light-pink ml-3">NightVentures</h1>
          <div className="flex items-center md:hidden">
            {/* hamburger icon */}
            <button className="block md:hidden text-white hover:text-yellow" onClick={() => setShowMenu(!showMenu)}>
              <svg className="h-8 w-8 fill-current" viewBox="0 0 24 24">
                {showMenu ? (
                  <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
                ) : (
                  <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z" />
                )}
              </svg>
            </button>
          </div>
          {/* navigation links */}
          <div className="hidden md:block">
            <button className="font-mont font-semibold text-xl text-yellow mr-6 border-b border-transparent hover:border-white" onClick={() => handleHomeClick()}>Home</button>
            <button className="font-mont font-semibold text-xl text-yellow mr-6 border-b border-transparent hover:border-white" onClick={() => handleAboutClick()}>About</button>
            <button className="font-mont font-semibold text-xl text-yellow mr-6 border-b border-transparent hover:border-white" onClick={() => handleMusicClick()}>Music</button>
            <button className="font-mont font-semibold text-xl text-yellow mr-6 border-b border-transparent hover:border-white" onClick={() => handleMapClick()}>Map</button>
          </div>

          <div className={`md:flex md:items-center md:justify-end absolute top-20 left-0 right-0 bg-purple z-10 md:z-auto overflow-hidden transition-all duration-500 ${showMenu ? 'h-auto py-2' : 'h-0'}`} style={{ width: '80%', borderRadius: '10px', margin: '0 auto', boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.5)' }}>
            <div className="flex flex-col items-center md:flex-row md:ml-3 md:mr-6">
              <button className="font-mont font-semibold text-xl text-yellow mb-2 md:mb-0 md:mr-6 border-b border-transparent hover:border-white block md:inline-block" onClick={() => handleLoginClick()}>Login</button>
              <button className="font-mont font-semibold text-xl text-yellow mb-2 md:mb-0 md:mr-6 border-b border-transparent hover:border-white block md:inline-block" onClick={() => handleAboutClick()}>About</button>
              <button className="font-mont font-semibold text-xl text-yellow mb-2 md:mb-0 md:mr-6 border-b border-transparent hover:border-white block md:inline-block" onClick={() => handleMusicClick()}>Music</button>
              <button className="font-mont font-semibold text-xl text-yellow mb-2 md:mb-0 md:mr-6 border-b border-transparent hover:border-white block md:inline-block" onClick={() => handleMapClick()}>Map</button>
            </div>
          </div>
        </div>
      </div>
      <div style={{
        height: "auto", backgroundColor: "#210B2C", width: "100%",
        display: 'block', padding: 40
      }}>
        <RealMap />
      </div>
    </div>
  )
}

export default MapPage