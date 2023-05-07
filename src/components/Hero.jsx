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
        <h1 className='text-bebas text-4xl md:text-6xl lg:text-8xl text-gradient md:pb-4 md:pt-6'>YOUR PERSONALIZED NIGHTCLUB. </h1>
        <h2 className='font-mont text-xl md:text-4xl pt-0 md:pt-8 lg:text-5xl text-yellow'>Find Your Rhythm, Find Your Club.</h2>
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