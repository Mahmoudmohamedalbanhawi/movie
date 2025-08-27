import React from "react";
import './index.css'
import Movie from "./Movie";
import './MovieList.css'
import Toggle from "./toggle";
export default function MoviesList({toggle , getId, error, isOpen , movies , isLoading})
{
    console.log("loading" , isLoading)
    
    console.log("koko" , movies)
    return(
        <React.Fragment>
            <div className="box ">
                {isLoading && <div className="loading">Loading...</div>}
                {error && <div className="error">{error}</div>}
                <Toggle toggle = {toggle} isOpen={isOpen}/>
                {!isOpen && (<ul className="list container">
                {(!isLoading && !error) && <Movie getId = {getId} movies = {movies}/>}
            </ul> )}
               
            </div>
            
        </React.Fragment>
    )
}