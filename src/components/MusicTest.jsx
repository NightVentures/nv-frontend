import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import 'rsuite/dist/rsuite.css'
import { Slider } from 'rsuite';

const MusicTest = () => {
  const [liveness, setLiveness] = useState(0);
  const [loudness, setLoudness] = useState(0);
  const [danceability, setDanceability] = useState(0);
  const [energy, setEnergy] = useState(0);
  const [speechiness, setSpeechiness] = useState(0);
  const [valence, setValence] = useState(0);
  const [tempo, setTempo] = useState(0);

  const handleLivenessChange = (value) => {
    setLiveness(value);
  }

  const handleLoudnessChange = (value) => {
    setLoudness(value);
  }

  const handleDanceabilityChange = (value) => {
    setDanceability(value);
  }

  const handleEnergyChange = (value) => {
    setEnergy(value);
  }

  const handleSpeechinessChange = (value) => {
    setSpeechiness(value);
  }

  const handleValenceChange = (value) => {
    setValence(value);
  }

  const handleTempoChange = (value) => {
    setTempo(value);
  }

  const navigate = useNavigate();

  const handleMapClick = () => {
    navigate('/map');
  }

  const handleHomeClick = () => {
    navigate('/');
    window.location.reload();
  }

  return (
    <div>
      <div style={{ backgroundColor: '#55286f', width: "100%", padding: "20px", paddingBottom: "24px" }}>
        <div className='flex justify-between items-center'>
          <h1 className='text-mont text-3xl text-light-pink ml-6'>NightVentures</h1>
          <div className='flex'>
            <button className='font-mont font-semibold text-xl text-yellow mr-6 border-b border-transparent hover:border-white' onClick={() => handleHomeClick()}>Home</button>
            <button className='font-mont font-semibold text-xl text-yellow mr-6 underline underline-offset-8'>Music</button>
            <button className='font-mont font-semibold text-xl text-yellow mr-6 border-b border-transparent hover:border-white' onClick={() => handleMapClick()}>Map</button>
          </div>
        </div>
      </div>
      <div style={{
        height: "auto", backgroundColor: "#210B2C", width: "100%",
        display: 'block', padding: 30
      }}>
        <h1 className='text-gradient text-bebas text-7xl pt-4 pb-6 md:text-8xl lg:text-8xl'>Find your musical match</h1>
        <p className='text-white font-mont text-3xl pb-6'>Answer these questions on a scale of 1 from 10 so we can match you to the right clubs!</p>
        <p className='text-white font-mont text-2xl pb-6'>1. How important is it for the music you listen to to feel alive and energetic?</p>
        <Slider
          min={0}
          max={100}
          step={50}
          defaultValue={liveness}
          graduated
          progress
          onChange={handleLivenessChange}
          className='my-slider'
        />
        <p className='text-white font-mont text-xl pt-4 pb-4'>You selected: {liveness}</p>

        <p className='text-white font-mont text-2xl pb-6'>2. How important is it for the music you listen to be loud and impactful?</p>
        <Slider
          min={0}
          max={100}
          step={50}
          defaultValue={loudness}
          graduated
          progress
          onChange={handleLoudnessChange}
          className='my-slider'
        />
        <p className='text-white font-mont text-xl pt-4 pb-4'>You selected: {loudness}</p>

        <p className='text-white font-mont text-2xl pb-6'>3. How important is it for the music you listen to to have a beat that makes you want to dance?</p>
        <Slider
          min={0}
          max={100}
          step={50}
          defaultValue={danceability}
          graduated
          progress
          onChange={handleDanceabilityChange}
          className='my-slider'
        />
        <p className='text-white font-mont text-xl pt-4 pb-4'>You selected: {danceability}</p>

        <p className='text-white font-mont text-2xl pb-6'>4. How important is it for the music you listen to to have a high level of energy and intensity?</p>
        <Slider
          min={0}
          max={100}
          step={50}
          defaultValue={energy}
          graduated
          progress
          onChange={handleEnergyChange}
          className='my-slider'
        />
        <p className='text-white font-mont text-xl pt-4 pb-4'>You selected: {energy}</p>

        <p className='text-white font-mont text-2xl pb-6'>5. How important is it for the music you listen to to have lyrics that are clear and easy to understand?</p>
        <Slider
          min={0}
          max={100}
          step={50}
          defaultValue={speechiness}
          graduated
          progress
          onChange={handleSpeechinessChange}
          className='my-slider'
        />
        <p className='text-white font-mont text-xl pt-4 pb-4'>You selected: {speechiness}</p>

        <p className='text-white font-mont text-2xl pb-6'>6. How important is it for the music you listen to to have a positive or uplifting mood?</p>
        <Slider
          min={0}
          max={100}
          step={50}
          defaultValue={valence}
          graduated
          progress
          onChange={handleValenceChange}
          className='my-slider'
        />
        <p className='text-white font-mont text-xl pt-4 pb-4' >You selected: {valence}</p>

        <p className='text-white font-mont text-2xl pb-6'>7. How important is it for the music you listen to to have a fast or slow tempo?</p>
        <Slider
          min={0}
          max={100}
          step={50}
          defaultValue={tempo}
          graduated
          progress
          onChange={handleTempoChange}
          className='my-slider'
        />
        <p className='text-white font-mont text-xl pt-4 pb-4'>You selected: {tempo}</p>
        <div className='flex justify-center'>
          <button className='bg-gradient w-80 text-bebas text-3xl text-purple py-2 px-10 rounded-full' onClick={() => handleMapClick()}>Continue to Map</button>
        </div>
      </div>
    </div>
  )
}

export default MusicTest