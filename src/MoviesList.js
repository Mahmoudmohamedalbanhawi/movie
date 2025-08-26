import React from "react";
import './index.css'
import Movie from "./Movie";
import './MovieList.css'
import Toggle from "./toggle";
export default function MoviesList()
{
    return(
        <React.Fragment>
            <div className="box ">
                <Toggle/>
            <ul className="list container">
                <Movie/>
            </ul>    
            </div>
            
        </React.Fragment>
    )
}