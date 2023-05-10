import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import adnan from '/adnan.webp'
import riwa from '/riwa.webp'
import sharbel from '/sharbel.webp'
import caren from '/caren.webp'
import cme from '/cme.svg'
import bmw from '/bmw.png'
import inmind from '/inmind.png'
import murex from '/murex.png'
import beirutai from '/beirutai.png'
import zaka from '/zaka.png'
import github from '/github.png'
import linkedin from '/linkedin.webp'

const About = () => {
    const navigate = useNavigate();
    const [showMenu, setShowMenu] = useState(false);

    const handleHomeClick = () => {
        navigate('/');
        setShowMenu(false);
    };

    const handleAboutClick = () => {
        navigate('/about');
        setShowMenu(false);
    };

    const handleMusicClick = () => {
        navigate('/music-test');
        setShowMenu(false);
    };

    const handleMapClick = () => {
        navigate('/map');
        setShowMenu(false);
    };

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <div id="full" style={{}}>
            <div style={{ backgroundColor: '#55286f', width: '100%', padding: '15px', paddingBottom: '20px' }}>
                <div className="flex justify-between items-center">
                    <h1 className="text-mont text-3xl text-light-pink ml-3">NightVentures</h1>
                    <div className="flex items-center md:hidden">
                        {/* hamburger icon */}
                        <button className="block md:hidden text-white hover:text-yellow" onClick={() => setShowMenu(!showMenu)}>
                            <svg className="h-8 w-8 fill-current" viewBox="0 0 24 24">
                                {showMenu ? (
                                    <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
                                ) : (
                                    <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z" />
                                )}
                            </svg>
                        </button>
                    </div>
                    {/* navigation links */}
                    <div className="hidden md:block">
                        <button className="font-mont font-semibold text-xl text-yellow mr-6 border-b border-transparent hover:border-white" onClick={() => handleHomeClick()}>Home</button>
                        <button className="font-mont font-semibold text-xl text-yellow mr-6 border-b border-transparent hover:border-white" onClick={() => handleAboutClick()}>About</button>
                        <button className="font-mont font-semibold text-xl text-yellow mr-6 border-b border-transparent hover:border-white" onClick={() => handleMusicClick()}>Music</button>
                        <button className="font-mont font-semibold text-xl text-yellow mr-6 border-b border-transparent hover:border-white" onClick={() => handleMapClick()}>Map</button>
                    </div>

                    <div className={`md:flex md:items-center md:justify-end absolute top-20 left-0 right-0 bg-purple z-10 md:z-auto overflow-hidden transition-all duration-500 ${showMenu ? 'h-auto py-2' : 'h-0'}`} style={{ width: '80%', borderRadius: '10px', margin: '0 auto', boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.5)' }}>
                        <div className="flex flex-col items-center md:flex-row md:ml-3 md:mr-6">
                            <button className="font-mont font-semibold text-xl text-yellow mb-2 md:mb-0 md:mr-6 border-b border-transparent hover:border-white block md:inline-block" onClick={() => handleHomeClick()}>Home</button>
                            <button className="font-mont font-semibold text-xl text-yellow mb-2 md:mb-0 md:mr-6 border-b border-transparent hover:border-white block md:inline-block" onClick={() => handleAboutClick()}>About</button>
                            <button className="font-mont font-semibold text-xl text-yellow mb-2 md:mb-0 md:mr-6 border-b border-transparent hover:border-white block md:inline-block" onClick={() => handleMusicClick()}>Music</button>
                            <button className="font-mont font-semibold text-xl text-yellow mb-2 md:mb-0 md:mr-6 border-b border-transparent hover:border-white block md:inline-block" onClick={() => handleMapClick()}>Map</button>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{
                height: '100%',
                backgroundColor: "#210B2C", width: "100%",
                display: 'block', padding: 40
            }}>
                <div className="team-section">
                    <h2 className="text-gradient text-bebas text-5xl md:text-7xl pt-4 pb-6 md:text-8xl lg:text-8xl mt-2 mb-6">
                        Meet Our Team
                    </h2>
                    <div className="flex flex-col md:flex-row justify-between">
                        <div className="flex flex-col items-center mb-10 md:mb-0">
                            <img
                                src={adnan}
                                alt="Team Member 1"
                                className="rounded-full h-64 w-32 object-cover mx-4 md:h-96 md:w-64 lg:h-128 lg:w-96"
                            />
                            <a href="https://addyscorner.tech/">
                                <h3 className="text-white font-mont text-2xl md:text-3xl pt-4 pb-6">
                                    Adnan Al Zahabi
                                </h3>
                            </a>
                            <p className="text-oswald text-light-pink text-xl md:text-2xl text-white mb-1">
                                Software Engineer
                            </p>
                            <div className='flex flex-col items-center mb-3'>
                                <img src={murex} className='h-12'></img>
                            </div>
                            <div className='flex flex-row space-x-5 items-center'>
                                <a href="https://github.com/zadnan2002" ><img src={github} className="h-8"></img></a>
                                <a href="https://www.linkedin.com/in/adnan-al-zahabi/"><img src={linkedin} className="h-12"></img></a>
                            </div>
                        </div>
                        <div className="flex flex-col items-center mb-10 md:mb-0">
                            <img
                                src={riwa}
                                alt="Team Member 2"
                                className="rounded-full h-64 w-32 object-cover mx-4 md:h-96 md:w-64 lg:h-128 lg:w-96"
                            />
                            <a href="https://riwasroom.vercel.app/"><h3 className="text-white font-mont text-2xl md:text-3xl pt-4 pb-6">
                                Riwa Hoteit
                            </h3></a>
                            <p className="text-oswald text-light-pink text-xl md:text-2xl text-white mb-4">
                                Frontend Developer
                            </p>
                            <div className='flex flex-row space-x-5 items-center mb-4'>
                                <img src={inmind} className='h-8'></img>
                                <img src={zaka} className='h-8'></img>
                                <img src={beirutai} className='h-8'></img>
                            </div>
                            <div className='flex flex-row space-x-5 items-center'>
                                <a href="https://github.com/riwaht" ><img src={github} className="h-8"></img></a>
                                <a href="https://www.linkedin.com/in/riwa-hoteit"><img src={linkedin} className="h-12"></img></a>
                            </div>
                        </div>
                        <div className="flex flex-col items-center mb-10 md:mb-0">
                            <img
                                src={caren}
                                alt="Team Member 3"
                                className="rounded-full h-64 w-32 object-cover mx-4 md:h-96 md:w-64 lg:h-128 lg:w-96"
                            />
                            <h3 className="text-white font-mont text-2xl md:text-3xl pt-4 pb-6">
                                Caren Youssef
                            </h3>
                            <p className="text-oswald text-light-pink text-xl md:text-2xl text-white">
                                Software Engineer
                            </p>
                            <div className='flex flex-row space-x-5 items-center'>
                                <img src={bmw} className='h-16'></img>
                                <img src={inmind} className='h-8'></img>
                            </div>
                            <div className='flex flex-row space-x-5 items-center'>
                                <a href="https://github.com/CarenYsf" ><img src={github} className="h-8"></img></a>
                                <a href="https://www.linkedin.com/in/caren-youssef-a56b8a16b"><img src={linkedin} className="h-12"></img></a>
                            </div>
                        </div>
                        <div className="flex flex-col items-center">
                            <img
                                src={sharbel}
                                alt="Team Member 4"
                                className="rounded-full h-64 w-32 object-cover mx-4 md:h-96 md:w-64 lg:h-128 lg:w-96"
                            />
                            <a href="https://sharbelxo.github.io/portfolio/">
                                <h3 className="text-white font-mont text-2xl md:text-3xl pt-4 pb-6">
                                    Sharbel Abou Sabha
                                </h3>
                            </a>
                            <p className="text-oswald text-light-pink text-xl md:text-2xl text-white mb-5">
                                Backend Developer
                            </p>
                            <div className='flex flex-col items-center mb-2'>
                                <img src={cme} className='h-10'></img>
                            </div>
                            <div className='flex flex-row space-x-5 items-center'>
                                <a href="https://github.com/sharbelxo" ><img src={github} className="h-8"></img></a>
                                <a href="https://www.linkedin.com/in/sharbelabousabha/"><img src={linkedin} className="h-12"></img></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='h-0 md:h-60 lg:h-90'>
                </div>
            </div>
        </div>
    )
}

export default About