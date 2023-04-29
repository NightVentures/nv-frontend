import React from 'react'
import { useNavigate } from 'react-router-dom';
import RealMap from './RealMap';

function MapPage() {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate('/');
  }

  const handleMusicClick = () => {
    navigate('/music-test');
  }

  return (
    <div>
      <div style={{ backgroundColor: '#55286f', width: "100%", padding: "20px", paddingBottom: "24px" }}>
        <div className='flex justify-between items-center'>
          <h1 className='text-mont text-3xl text-light-pink ml-6'>NightVentures</h1>
          <div className='flex'>
            <button className='font-mont font-semibold text-xl text-yellow mr-6 border-b border-transparent hover:border-white' onClick={() => handleHomeClick()}>Home</button>
            <button className='font-mont font-semibold text-xl text-yellow mr-6 border-b border-transparent hover:border-white' onClick={() => handleMusicClick()}>Music</button>
            <button className='font-mont font-semibold text-xl text-yellow mr-6 underline underline-offset-8'>Map</button>
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