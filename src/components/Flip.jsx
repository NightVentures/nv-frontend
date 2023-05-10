import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import purple from '/purple1.webp'
import green from '/green1.webp'
import yellow from '/yellow1.webp'

const Flip = () => {
  return (
    <div className='pb-10'>
      <h1 className='text-oswald text-3xl md:text-4xl lg:text-5xl text-light-pink mb-10'>Your Night Starts with NightVentures.</h1>
      <Carousel showStatus={false}
        showThumbs={false} swipeable={true} emulateTouch={true} infiniteLoop={true} >
        <div className="relative" >
          <img src={purple} className="h-48 md:h-96 lg:h-128" />
          <p className="text-bebas absolute inset-0 flex items-center justify-center text-white text-2xl md:text-4xl lg:text-5xl font-bold">Tune In To Your Own Music</p>
        </div>
        <div>
          <img src={green} className="h-48 md:h-96 lg:h-128" />
          <p className="text-bebas absolute inset-0 flex items-center justify-center text-yellow text-2xl md:text-4xl lg:text-5xl font-bold">Find a Club Close to Home</p>
        </div>
        <div>
          <img src={yellow} className="h-48 md:h-96 lg:h-128" />
          <p className="text-bebas absolute inset-0 flex items-center justify-center text-black text-2xl md:text-4xl lg:text-5xl font-bold">Navigate the NightLife Experience</p>
        </div>
      </Carousel>
    </div>
  )
}

export default Flip
