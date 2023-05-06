import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import 'rsuite/dist/rsuite.css'
import { Slider } from 'rsuite';

const MusicTest = () => {
  const [liveness, setLiveness] = useState(0);
  const [popularity, setPopularity] = useState(0);
  const [danceability, setDanceability] = useState(0);
  const [energy, setEnergy] = useState(0);
  const [acousticness, setAcousticness] = useState(0);
  const [valence, setValence] = useState(0);
  const [bpm, setBpm] = useState(0);
  const [result, setResult] = useState();

  const handleLivenessChange = (value) => {
    setLiveness(value);
  }

  const handlePopularityChange = (value) => {
    setPopularity(value);
  }

  const handleDanceabilityChange = (value) => {
    setDanceability(value);
  }

  const handleEnergyChange = (value) => {
    setEnergy(value);
  }

  const handleAcousticnessChange = (value) => {
    setAcousticness(value);
  }

  const handleValenceChange = (value) => {
    setValence(value);
  }

  const handleBpmChange = (value) => {
    setBpm(value);
  }

  const navigate = useNavigate();

  const handleMapClick = () => {
    navigate('/map');
  }

  const handleHomeClick = () => {
    navigate('/');
    window.location.reload();
  }

  const handleMusicClick = () => {
    const features = { bpm: bpm, energy: energy, danceability: danceabilitu, liveness: liveness, valence: valence, acousticness: acousticness, popularity: popularity };
    const data = {
      features: Object.values(features).map((value) => [value]),
    };

    fetch('http://localhost:8000/predict', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'accept': 'application/json',
      },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
        setResult(data.predicted_genre)
        console.log("Features: ", features);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
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
          max={1}
          step={0.01}
          defaultValue={liveness}
          progress
          onChange={handleLivenessChange}
          className='my-slider'
        />
        <p className='text-white font-mont text-xl pt-4 pb-4'>You selected: {Math.round(liveness * 100)}</p>

        <p className='text-white font-mont text-2xl pb-6'>2. How important is it for the music you listen to be popular or well-known?</p>
        <Slider
          min={0}
          max={1}
          step={0.01}
          defaultValue={popularity}
          progress
          onChange={handlePopularityChange}
          className='my-slider'
        />
        <p className='text-white font-mont text-xl pt-4 pb-4'>You selected: {Math.round(popularity * 100)}</p>

        <p className='text-white font-mont text-2xl pb-6'>3. How important is it for the music you listen to to have a beat that makes you want to dance?</p>
        <Slider
          min={0}
          max={1}
          step={0.01}
          defaultValue={danceability}
          progress
          onChange={handleDanceabilityChange}
          className='my-slider'
        />
        <p className='text-white font-mont text-xl pt-4 pb-4'>You selected: {Math.round(danceability * 100)}</p>

        <p className='text-white font-mont text-2xl pb-6'>4. How important is it for the music you listen to to have a high level of energy and intensity?</p>
        <Slider
          min={0}
          max={1}
          step={0.01}
          defaultValue={energy}
          progress
          onChange={handleEnergyChange}
          className='my-slider'
        />
        <p className='text-white font-mont text-xl pt-4 pb-4'>You selected: {Math.round(energy * 100)}</p>

        <p className='text-white font-mont text-2xl pb-6'>5. How important is it for the music you listen to to have a natural, raw sound?</p>
        <Slider
          min={0}
          max={1}
          step={0.01}
          defaultValue={acousticness}
          progress
          onChange={handleAcousticnessChange}
          className='my-slider'
        />
        <p className='text-white font-mont text-xl pt-4 pb-4'>You selected: {Math.round(acousticness * 100)}</p>

        <p className='text-white font-mont text-2xl pb-6'>6. How important is it for the music you listen to to have a positive or uplifting mood?</p>
        <Slider
          min={0}
          max={1}
          step={0.01}
          defaultValue={valence}
          progress
          onChange={handleValenceChange}
          className='my-slider'
        />
        <p className='text-white font-mont text-xl pt-4 pb-4' >You selected: {Math.round(valence * 100)}</p>

        <p className='text-white font-mont text-2xl pb-6'>7. How important is it for the music you listen to to have a fast bpm?</p>
        <Slider
          min={0}
          max={1}
          step={0.01}
          defaultValue={bpm}
          progress
          onChange={handleBpmChange}
          className='my-slider'
        />
        <p className='text-white font-mont text-xl pt-4 pb-4'>You selected: {Math.round(bpm * 100)}</p>
        <div className='flex flex-col justify-center items-center'>
          {!result && <button className='bg-gradient w-80 text-bebas text-4xl text-purple py-2 px-10 rounded-full' onClick={() => handleMusicClick()}>Check Results</button>}
          {result && <h1 className='text-bebas text-6xl md:text-8xl lg:text-10xl text-gradient pb-4 pt-20'>Your Genre is : {result} </h1>}
          {result && <button className='bg-gradient w-80 text-bebas text-4xl text-purple py-2 px-10 rounded-full mt-10' onClick={() => handleMapClick()}>Check Your Map</button>}
        </div>
      </div>
    </div>
  )
}

export default MusicTest