import React from 'react'
import footer from '/footer.jpg'

const Footer = () => {
  return (
    <div style={{ position: 'relative', display: 'inline-block', height: "auto" }}>
      <img id="footer" src={footer} />
      <h1 className="text-bebas text-4xl p-5 md:text-6xl lg:text-8xl text-yellow" style={{
        position: 'absolute',
        top: '20%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        textAlign: 'center',
        width: '100%',
      }}>
        LET US SHOW YOU THE BEST OF NIGHTLIFE.
      </h1>
    </div>

  )
}

export default Footer