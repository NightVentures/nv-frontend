import React from 'react'
import pichart from '/pichart.svg'
const Music = () => {
  return (
    <div>
      <div className='flex justify-center w-full'>
        <h1 className='text-oswald text-4xl text-yellow mb-5'>Discover Your Music Persona.</h1>
      </div>
      <div className='flex flex-row pt-10 justify-between'>
        <img src={pichart} />
        <div className='flex flex-col justify-center pl-20'>
          <h1 className='text-bebas text-4xl text-light-pink mb-2'>UNLOCK YOUR NIGHTLIFE POTENTIAL</h1>
          <p className='text-oswald text-2xl text-white mb-10'>Find your perfect music match with our quiz and get personalized club recommendations. Don't miss out on the best nightlife!</p>
          <div className='flex justify-center'>
            <button className='bg-gradient w-80 text-bebas text-3xl text-purple py-2 px-10 rounded-full'>TAKE THE TEST</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Music