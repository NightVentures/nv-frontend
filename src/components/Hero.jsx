import React from 'react'

const Hero = () => {
  return (
    <div className='flex justify-center items-center h-screen relative' style={{
      height: 'calc(100vh - 80px)',
      backgroundImage: "url('/main.jpg')",
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
    }}>
      <div className='absolute inset-0 bg-black opacity-80 z-0'></div>
      <div className='relative z-10 flex flex-col justify-center items-center' style={{
        textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        marginBottom: '100px'
      }}>
        <h1 className='text-bebas text-6xl md:text-8xl lg:text-10xl text-gradient pb-4 pt-6'>YOUR PERSONALIZED NIGHTCLUB. </h1>
        <h2 className='font-mont text-3xl md:text-5xl lg:text-5xl text-yellow pt-8'>Find Your Rhythm, Find Your Club.</h2>
      </div>
      <button style={{
        position: 'absolute',
        bottom: '20px',
        left: '50%',
        transform: 'translateX(-50%)',
      }}>
        <img src='/expand.svg' alt='expand' className='animate-bounce w-10 h-10' />
      </button>
    </div>



  )
}

export default Hero