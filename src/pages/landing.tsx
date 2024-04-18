import { useState } from 'react'
import lfglogo from '../assets/lfglogo.svg'
import '../styles/Landing.css'

function Landing() {

  return (
    <>
      <div>
        <img src={lfglogo} className="logo" alt="logo" />
      </div>
      <div className="card">
        <button>
          Login
        </button>
      </div>
    </>
  )
}

export default Landing
