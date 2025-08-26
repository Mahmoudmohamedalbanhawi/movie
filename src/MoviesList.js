import React from "react";
import './index.css'
import Movie from "./Movie";
import './MovieList.css'
import Toggle from "./toggle";
export default function MoviesList({toggle , isOpen , movies})
{
    console.log("koko" , movies)
    return(
        <React.Fragment>
            <div className="box ">
                <Toggle toggle = {toggle} isOpen={isOpen}/>
                {!isOpen && (<ul className="list container">
                <Movie movies = {movies}/>
            </ul> )}
               
            </div>
            
        </React.Fragment>
    )
}