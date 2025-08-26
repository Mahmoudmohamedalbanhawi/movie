import React from 'react'
import './index.css'
import './Movie.css'

export default function Movie({movies}) {
  console.log("movie" , movies)
  if(!movies || movies.length === 0) return <p>No movies found</p>
  return (
    <React.Fragment>
      {movies.map((movie)=>{
        return (
          <li key={movie.imdbID} >
        <img src={movie.Poster} alt={movie.Title}/>
        <h3>{movie.Title}</h3>
        <div className='flex'>
          <span>🗓</span>
          <span>{movie.Year}</span>
        </div>
      </li>
        )
      })}
      
    </React.Fragment>
  )
}
