import React from 'react'
import account from '/account.svg'
import { useNavigate } from 'react-router-dom';


const Navbar = () => {
  const navigate = useNavigate()

  const handleLoginClick = () => {
    navigate('/login')
  }

  const handleMusicClick = () => {
    navigate('/music-test')
  }

  const handleMapClick = () => {
    navigate('/map')
  }

  const handleLogoutClick = () => {
    setLoggedIn(false)
    navigate('/')
  }

  return (
    <div style={{ backgroundColor: '#55286f', width: "100%", padding: "15px", paddingBottom: "20px" }}>
      <div className='flex justify-between items-center'>
        <h1 className='text-mont text-3xl text-light-pink ml-3'>NightVentures</h1>
        <div className='flex'>
          <img src={account} alt='account' className='mr-1' />
          <button className='font-mont font-semibold text-xl text-yellow mr-6 border-b border-transparent hover:border-white' onClick={() => handleLoginClick()}>Login</button>
          <button className='font-mont font-semibold text-xl text-yellow mr-6 border-b border-transparent hover:border-white' onClick={() => handleMusicClick()}>Music</button>
          <button className='font-mont font-semibold text-xl text-yellow mr-6 border-b border-transparent hover:border-white' onClick={() => handleMapClick()}>Map</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar