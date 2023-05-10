import { useState } from 'react'
import styles from './styles.js'
import { Flip, Music, Map, Footer } from './components/'
function App() {

  return (
      <div className="bg-primary w-full overflow-hidden">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <div className="w-full h-160 pt-10">
              <Flip />
            </div>
            <div className="w-full h-160 pt-10">
              <Music />
            </div>
            <div className="w-full h-160 pt-10">
              <Map />
            </div>
          </div>
        </div>
        <div className="w-full">
          <Footer />
        </div>
      </div>


  )
}

export default App
