import React from 'react'
import './index.css'
import './Toggle.css'
import './MovieList.css'
export default function Toggle({toggle , isOpen}) {
  console.log(isOpen)
  return (
    <React.Fragment>
        <button className='toggle' onClick={toggle}>
          
          {isOpen ? "+": "-"}
          
          </button>
    </React.Fragment>
  )
}
