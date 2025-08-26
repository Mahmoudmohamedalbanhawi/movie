import React from 'react'
import './index.css'
import './MovieList.css'
import Toggle from './toggle'
import Watch from './Watch'

export default function WatchedMovies() {
  return (
   <React.Fragment>
    <div className='box '>
    <Toggle/>
    <div className='container'>
     <Watch/>

    </div>
    </div>
    
   </React.Fragment>
  )
}
