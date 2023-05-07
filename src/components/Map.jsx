import React from 'react'
import map from '/Map.png'
import { useNavigate } from 'react-router-dom';
const Map = () => {
  const navigate = useNavigate();
  const handleMapClick = () => {
    navigate('/map');
  }

  return (
    <div className='pt-0 md:pt-10'>
      <div className='flex justify-end w-full'>
        <h1 className='text-oswald text-3xl md:text-4xl lg:text-5xl text-dark-pink mb-5'>Find the Nightlife Near You.</h1>
      </div>
      <div className='flex flex-col md:flex-row pt-0 md:pt-10 justify-between'>
        <div className='md:w-1/2 md:pr-20'>
          <h1 className='text-bebas text-3xl md:text-4xl text-light-pink mb-2'>Discover Your Local Nightlife Scene</h1>
          <p className='text-oswald text-xl md:text-2xl text-white mb-2 md:mb-10'>Say goodbye to aimlessly searching for the right club.</p>
          <p className='text-oswald text-xl md:text-2xl text-white mb-10 md:mb-10'>
            Our map is designed to help you find the perfect spot for your music taste and location.</p>
          <div className='flex justify-center'>
            <button className='bg-gradient w-80 text-bebas text-2xl md:text-3xl mb-10 md:mb-0 text-purple py-2 px-10 rounded-full' onClick={() => handleMapClick()}>Find Your NightClub</button>
          </div>
        </div>
        <div className='md:w-1/2 pb-10 md:pb-0 order-first md:order-last'>
          <img src={map} />
        </div>
      </div>
    </div>
  )
}

export default Map