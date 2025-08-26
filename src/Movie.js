import React from 'react'
import './index.css'
import './Movie.css'

export default function Movie() {
  return (
    <React.Fragment>
      <li>
        <img src="https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg" alt="Inception"/>
        <h3>Inception</h3>
        <div className='flex'>
          <span>🗓</span>
          <span>2010</span>
        </div>
      </li>
    </React.Fragment>
  )
}
