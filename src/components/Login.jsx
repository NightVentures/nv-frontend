import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import login from '/login-pic.webp'

function Login(props) {
    const [currentView, setCurrentView] = useState("logIn")
    const [loggedIn, setLoggedIn] = useState(false)
    const navigate = useNavigate()

    const handleLogin = () => {
        setLoggedIn(true)
        navigate('/')
    }

    const changeView = (view, event) => {
        event.preventDefault();
        setCurrentView(view)
    }

    const handleHomeClick = () => {
        navigate('/')
    }

    const currentViewComponent = () => {
        switch (currentView) {
            case "logIn":
                return (
                    <form>
                        <div className='flex flex-col justify-center items-center'>
                            <h1 className='font-mont text-5xl md:text-6xl text-white pb-4'>Welcome Back!</h1>
                            <div className='flex flex-col items-center'>
                                <input id="inp" className='font-mont text-xl text-dark-pink bg-transparent p-3 mt-6 mb-4 border-2 rounded-lg' style={{
                                    border: "2px solid #D9BBF9",
                                    borderRadius: "7px",
                                    width: "451px",
                                    height: "68px"
                                }} type='text' placeholder='Email' />
                                <input id="inp" className='font-mont text-xl text-dark-pink bg-transparent p-3 mt-6 mb-8 border-2 rounded-lg' style={{
                                    border: "2px solid #D9BBF9",
                                    borderRadius: "7px",
                                    width: "451px",
                                    height: "68px"
                                }} type='text' placeholder='Password' />
                                <div className='flex flex-row space-x-10 md:space-x-20 mb-4'>
                                    <div className="flex flex-row">
                                        <input type="checkbox" className="mr-2 bg-transparent" />
                                        <p className='font-mont text-base md:text-xl text-white'>Keep me logged in</p>
                                    </div>
                                    <button id="forgot" className='font-mont text-base md:text-xl text-dark-pink' onClick={(event) => changeView("PWReset", event)}>Forgot Password?</button>
                                </div>
                                <button id="login" className='text-bebas text-3xl text-white pt-1' style={{
                                    backgroundColor: "#55286F", width: "446px", height: "73px", borderRadius: "10px"
                                }} onClick={() => handleLogin()}>Login</button>
                                <div className='flex flex-row space-x-1 mt-4'>
                                    <p className='text-bebas text-2xl text-white'>Don't have an account? </p>
                                    <button id="forgot" className='text-bebas text-2xl text-dark-pink' onClick={(event) => changeView("signUp", event)}>Sign Up!</button>
                                </div>
                            </div>
                        </div>
                    </form>
                )
            case "PWReset":
                return (
                    <form>
                        <div className='flex flex-col justify-center items-center'>
                            <h1 className='font-mont text-5xl md:text-6xl text-white pb-4'>Reset Password</h1>
                            <div className='flex flex-col items-center'>
                                <input id="inp" className='font-mont text-xl text-dark-pink bg-transparent p-3 mt-6 mb-4 border-2 rounded-lg' style={{
                                    border: "2px solid #D9BBF9",
                                    borderRadius: "7px",
                                    width: "451px",
                                    height: "68px"
                                }} type='text' placeholder='Email' />
                                <button id="login" className='text-bebas text-3xl text-white pt-1 mt-3' style={{
                                    backgroundColor: "#55286F", width: "446px", height: "73px", borderRadius: "10px"
                                }} onClick={() => handleLogin()}>Send Reset Link</button>
                                <div className='flex flex-row space-x-1 mt-4'>
                                    <p className='text-bebas text-2xl text-white'>Don't have an account? </p>
                                    <button id="forgot" className='text-bebas text-2xl text-dark-pink' onClick={(event) => changeView("signUp", event)}>Sign Up!</button>
                                </div>
                            </div>
                        </div>
                    </form>
                )
            case "signUp":
                return (
                    <form>
                        <div className='flex flex-col justify-center items-center'>
                            <h1 className='font-mont text-5xl md:text-6xl text-white pb-4'>Welcome!</h1>
                            <div className='flex flex-col items-center'>
                                <input id="inp" className='font-mont text-xl text-dark-pink bg-transparent p-3 mt-6 mb-4 border-2 rounded-lg' style={{
                                    border: "2px solid #D9BBF9",
                                    borderRadius: "7px",
                                    width: "451px",
                                    height: "68px"
                                }} type='text' placeholder='Email' />
                                <input id="inp" className='font-mont text-xl text-dark-pink bg-transparent p-3 mt-6 mb-4 border-2 rounded-lg' style={{
                                    border: "2px solid #D9BBF9",
                                    borderRadius: "7px",
                                    width: "451px",
                                    height: "68px"
                                }} type='text' placeholder='Password' />
                                <input id="inp" className='font-mont text-xl text-dark-pink bg-transparent p-3 mt-6 mb-4 border-2 rounded-lg' style={{
                                    border: "2px solid #D9BBF9",
                                    borderRadius: "7px",
                                    width: "451px",
                                    height: "68px"
                                }} type='text' placeholder='Confirm Password' />
                                <button id="login" className='text-bebas text-3xl text-white pt-1 mt-3' style={{
                                    backgroundColor: "#55286F", width: "446px", height: "73px", borderRadius: "10px"
                                }} onClick={() => handleLogin()}>Sign Up</button>
                                <div className='flex flex-row space-x-1 mt-4'>
                                    <p className='text-bebas text-2xl text-white'>Already have an account? </p>
                                    <button id="forgot" className='text-bebas text-2xl text-dark-pink' onClick={(event) => changeView("logIn", event)}>Login!</button>
                                </div>
                            </div>
                        </div>
                    </form>
                )
            default:
                break
        }
    }

    return (
        <div style={{ height: "100vh" }}>
            <div style={{ backgroundColor: '#55286f', width: "100%", padding: "15px", paddingBottom: "20px" }}>
                <div className='flex justify-between items-center'>
                    <h1 className='text-mont text-3xl text-light-pink ml-3'>NightVentures</h1>
                    <button className='font-mont font-semibold text-xl text-yellow pt-3 mr-10 border-b border-transparent hover:border-white' onClick={() => handleHomeClick()}>Home</button>
                </div>
            </div>
            <div style={{
                height: "100%", backgroundColor: "#210B2C", width: "100%",
                display: 'block', padding: 30
            }}>
                <div className='flex flex-col lg:flex-row justify-center items-center'>
                    <div className='lg:w-1/2'>
                        {currentViewComponent()}
                    </div>
                    <div className='flex flex-end lg:w-1/2'>
                        <img id="login-image" src={login}
                            style={{ width: "auto", height: 700, borderRadius: "63px", opacity: "0.6", transition: "opacity 0.3s" }}
                            onMouseOver={(e) => { e.currentTarget.style.opacity = "1.0" }}
                            onMouseOut={(e) => { e.currentTarget.style.opacity = "0.6" }}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
