import React from 'react'
import './index.css'
import './Watch.css'
export default function Watch() {
  return (
    <div className='margin-top-2 summary'>
      {/* <p>hello koko</p> */}
      <h3>MOVIES YOU WATCHED</h3>
      <div className='d-flex align-items-center justify-content-between '>
        
            <span style={{"fontSize":"1.6rem"}}>#️⃣</span>
            <div >
                    <p>
                2
            </p>
            <p>Movies</p>
        
            </div>
            <div>
                <span>⭐️</span>
                <span>8.4</span>
            </div>
            <div>
                <span>🌟</span>
                <span>
                    8.5
                </span>
            </div>
            <div>
                <span>⏳</span>
                <span>12h 23m</span>
            </div>
      </div>
    </div>
  )
}
