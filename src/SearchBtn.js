import React from "react";
import './SearchBtn.css'
import './index.css'
export default function SearchBtn({setQuery})
{
    function handleChange(e)
    {
        setQuery(e.target.value)
    }
    return(
        <React.Fragment>
        <div className="search-btn">
            <input type="text" onChange={handleChange} placeholder="Search Movie"/>
        </div>
        </React.Fragment>
    )
}