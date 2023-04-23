import React from 'react'
import account from '/account.svg'

const Navbar = () => {
  return (
    <div style={{ backgroundColor: '#55286f', width: "100%", padding: "20px", paddingBottom: "24px" }}>
      <div className='flex justify-between items-center'>
        <h1 className='text-mont text-3xl text-light-pink ml-6'>NightVentures</h1>
        <div className='flex'>
          <img src={account} alt='account' className='mr-1'/>
          <button className='font-mont font-semibold text-xl text-yellow mr-6'>Login</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar