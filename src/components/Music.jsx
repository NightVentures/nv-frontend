import React from 'react'
import pichart from '/pichart.svg'
import { useNavigate } from 'react-router-dom';
const Music = () => {
  const navigate = useNavigate();
  const handleMusicClick = () => {
    navigate('/music-test')
  }

  return (
    <div>
      <div className='flex justify-center w-full'>
        <h1 className='text-oswald text-3xl md:text-4xl lg:text-5xl text-yellow mb-5'>Discover Your Music Persona.</h1>
      </div>
      <div className='flex flex-col md:flex-row pt-5 md:pt-10 justify-between'>
        <img src={pichart} />
        <div className='flex flex-col md:justify-center md:pl-20'>
          <h1 className='text-bebas text-3xl md:text-4xl text-light-pink mb-2 pt-10 md:pt-0'>UNLOCK YOUR NIGHTLIFE POTENTIAL</h1>
          <p className='text-oswald text-xl md:text-2xl text-white mb-10 md:mb-10'>Find your perfect music match with our quiz and get personalized club recommendations. Don't miss out on the best nightlife!</p>
          <div className='flex justify-center'>
            <button className='bg-gradient w-80 text-bebas text-2xl md:text-3xl  text-purple py-2 px-10 rounded-full' onClick={() => handleMusicClick()}>TAKE THE TEST</button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Music