import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import login from '/login-pic.jpg'

import { auth } from '../firebase';
import { signInWithEmailAndPassword } from "firebase/auth";

function Login(props) {

    const [currentView, setCurrentView] = useState("logIn")
    const [loggedIn, setLoggedIn] = useState(false)
    const navigate = useNavigate()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [passwordConfirm, setPasswordConfirm] = useState("")
    const [rememberMe, setRememberMe] = useState(false)

    const handleLogin = (e) => {
        e.preventDefault();
        if (currentView === "logIn") {
            signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    const user = userCredential.user;
                    console.log(user)
                    setLoggedIn(true)
                    navigate("/")
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log(errorCode)
                    console.log(errorMessage)
                });
        } else if (currentView === "signUp") {
            if (password === passwordConfirm) {
                createUserWithEmailAndPassword(auth, email, password)
                    .then((userCredential) => {
                        const user = userCredential.user;
                        console.log(user)
                        setLoggedIn(true)
                        navigate("/")
                    })
                    .catch((error) => {
                        const errorCode = error.code;
                        const errorMessage = error.message;
                        console.log(errorCode)
                        console.log(errorMessage)
                    });
            } else {
                alert("Passwords do not match!")
            }
        } else if (currentView === "PWReset") {
            sendPasswordResetEmail(auth, email)
                .then(() => {
                    console.log("Password Reset Email Sent!")
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log(errorCode)
                    console.log(errorMessage)
                });
        }
    }

    const changeView = (view) => {
        setCurrentView(view)
    }

    const currentViewComponent = () => {
        switch (currentView) {
            case "logIn":
                return (
                    <form>
                        <div className='flex flex-col justify-center items-center'>
                            <h1 className='font-mont text-6xl text-white pb-4'>Welcome Back!</h1>
                            <div className='flex flex-col items-center'>
                                <input className='font-mont text-xl text-dark-pink bg-transparent p-3 mt-6 mb-4 border-2 rounded-lg' style={{
                                    border: "2px solid #D9BBF9",
                                    borderRadius: "7px",
                                    width: "451px",
                                    height: "68px"
                                }} type='text' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
                                <input className='font-mont text-xl text-dark-pink bg-transparent p-3 mt-6 mb-8 border-2 rounded-lg' style={{
                                    border: "2px solid #D9BBF9",
                                    borderRadius: "7px",
                                    width: "451px",
                                    height: "68px"
                                }} type='text' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
                                <div className='flex flex-row space-x-20 mb-4'>
                                    <div className="flex flex-row">
                                        <input type="checkbox" className="mr-2 bg-transparent" checked={rememberMe} onChange={() => setRememberMe(!rememberMe)} />
                                        <p className='font-mont text-xl text-white'>Keep me logged in</p>
                                    </div>
                                    <button id="forgot" className='font-mont text-xl text-dark-pink' onClick={() => changeView("PWReset")}>Forgot Password?</button>
                                </div>
                                <button id="login" className='text-bebas text-3xl text-white pt-1' style={{
                                    backgroundColor: "#55286F", width: "446px", height: "73px", borderRadius: "10px"
                                }} onClick={() => handleLogin()}>Login</button>
                                <div className='flex flex-row space-x-1 mt-4'>
                                    <p className='text-bebas text-2xl text-white'>Don't have an account? </p>
                                    <button id="forgot" className='text-bebas text-2xl text-dark-pink' onClick={() => changeView("signUp")}>Sign Up!</button>
                                </div>
                            </div>
                        </div>
                    </form>
                )
            case "PWReset":
                return (
                    <form>
                        <div className='flex flex-col justify-center items-center'>
                            <h1 className='font-mont text-6xl text-white pb-4'>Reset Password</h1>
                            <div className='flex flex-col items-center'>
                                <input className='font-mont text-xl text-dark-pink bg-transparent p-3 mt-6 mb-4 border-2 rounded-lg' style={{
                                    border: "2px solid #D9BBF9",
                                    borderRadius: "7px",
                                    width: "451px",
                                    height: "68px"
                                }} type='text' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
                                <button id="login" className='text-bebas text-3xl text-white pt-1 mt-3' style={{
                                    backgroundColor: "#55286F", width: "446px", height: "73px", borderRadius: "10px"
                                }} onClick={() => handleLogin()}>Send Reset Link</button>
                                <div className='flex flex-row space-x-1 mt-4'>
                                    <p className='text-bebas text-2xl text-white'>Don't have an account? </p>
                                    <button id="forgot" className='text-bebas text-2xl text-dark-pink' onClick={() => changeView("signUp")}>Sign Up!</button>
                                </div>
                            </div>
                        </div>
                    </form>
                )
            case "signUp":
                return (
                    <form>
                        <div className='flex flex-col justify-center items-center'>
                            <h1 className='font-mont text-6xl text-white pb-4'>Welcome!</h1>
                            <div className='flex flex-col items-center'>
                                <input className='font-mont text-xl text-dark-pink bg-transparent p-3 mt-6 mb-4 border-2 rounded-lg' style={{
                                    border: "2px solid #D9BBF9",
                                    borderRadius: "7px",
                                    width: "451px",
                                    height: "68px"
                                }} type='text' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
                                <input className='font-mont text-xl text-dark-pink bg-transparent p-3 mt-6 mb-4 border-2 rounded-lg' style={{
                                    border: "2px solid #D9BBF9",
                                    borderRadius: "7px",
                                    width: "451px",
                                    height: "68px"
                                }} type='text' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
                                <input className='font-mont text-xl text-dark-pink bg-transparent p-3 mt-6 mb-4 border-2 rounded-lg' style={{
                                    border: "2px solid #D9BBF9",
                                    borderRadius: "7px",
                                    width: "451px",
                                    height: "68px"
                                }} type='text' placeholder='Confirm Password' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                                <button id="login" className='text-bebas text-3xl text-white pt-1 mt-3' style={{
                                    backgroundColor: "#55286F", width: "446px", height: "73px", borderRadius: "10px"
                                }} onClick={() => handleLogin()}>Sign Up</button>
                                <div className='flex flex-row space-x-1 mt-4'>
                                    <p className='text-bebas text-2xl text-white'>Already have an account? </p>
                                    <button id="forgot" className='text-bebas text-2xl text-dark-pink' onClick={() => changeView("logIn")}>Login!</button>
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
        <div>
            <div style={{ backgroundColor: '#55286f', width: "100%", padding: "15px", paddingBottom: "24px" }}>
                <div className='flex justify-between items-center'>
                    <h1 className='text-mont text-3xl text-light-pink ml-6'>NightVentures</h1>
                </div>
            </div>
            <div style={{
                height: "auto", backgroundColor: "#210B2C", width: "100%",
                display: 'block', padding: 30
            }}>
                <div className='flex flex-col lg:flex-row justify-center items-center'>
                    <div className='lg:w-1/2'>
                        {currentViewComponent()}
                    </div>
                    <div className='flex flex-end lg:w-1/2'>
                        <img id="login-image" src={login}
                            style={{ width: "auto", height: 900, borderRadius: "63px", opacity: "0.6", transition: "opacity 0.3s" }}
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
