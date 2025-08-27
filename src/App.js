import React, { use, useEffect, useState } from 'react';
import './App.css';
import Navbar from './navbar';
import MoviesList from './MoviesList';
import WatchedMovies from './WatchedMovies';

function App() {
  const [movies , setMovies] = useState([]);
  const apiKey = "ad8ee689";
  const [query , setQuery] = useState("avengers");
  const [isOpen , setIsOpen] = useState(false);
  const [isLoading , setIsLoading] = useState(false);
  const [error , setError] = useState(null);
  function toggle()
  {
    setIsOpen(isOpen => !isOpen);
  }
  async function getMovies()
  {
    try {
      setIsLoading(true);
      setError(null);
      const res = await fetch(`https://www.omdbapi.com/?apikey=${apiKey}&s=${query}`);
    const data = await res.json();
    setMovies(data.Search)
    console.log(data.Search);
    setIsLoading(false);
      
    } catch (error) {
      setIsLoading(false);
      console.log("error" , error)
      setError("Something went wrong please try again later" );
    }
    

  }
  useEffect(()=>{
    getMovies();
  },[query])
  return (
    <React.Fragment>
      <div>
      <Navbar setQuery = {setQuery}/>
      </div>

    
    <div className='d-flex margin-top-2 justify-content-center main gap-2' >
       <MoviesList isLoading={isLoading} error={error} toggle={toggle} movies={movies} isOpen={isOpen}/>
     
      <WatchedMovies/>
    </div>
     
    </React.Fragment>
  );
}

export default App;
