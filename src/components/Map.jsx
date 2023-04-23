import React from 'react'
import map from '/Map.png'
const Map = () => {
  return (
    <div className='pt-10'>
      <div className='flex justify-end w-full'>
        <h1 className='text-oswald text-4xl text-dark-pink mb-5'>Find the Nightlife Near You.</h1>
      </div>
      <div className='flex flex-row pt-10 justify-between'>
        <div className='flex flex-col justify-center pr-20'>
          <h1 className='text-bebas text-4xl text-light-pink mb-2'>Discover Your Local Nightlife Scene</h1>
          <p className='text-oswald text-2xl text-white mb-10'>Say goodbye to aimlessly searching for the right club.</p>
          <p className='text-oswald text-2xl text-white mb-10'>
            Our map is designed to help you find the perfect spot for your music taste and location.</p>
          <div className='flex justify-center'>
            <button className='bg-gradient w-80 text-bebas text-3xl text-purple py-2 px-10 rounded-full'>Find Your NightClub</button>
          </div>
        </div>
        <img src={map} />
      </div>
    </div>
  )
}

export default Map