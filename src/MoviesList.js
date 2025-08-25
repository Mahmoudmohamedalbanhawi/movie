import React from "react";
import './index.css'
import Movie from "./Movie";
import './MovieList.css'
export default function MoviesList()
{
    return(
        <React.Fragment>
            <div className="box">
            <ul>
                <Movie/>
            </ul>    
            </div>
            
        </React.Fragment>
    )
}