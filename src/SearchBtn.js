import React from "react";
import './SearchBtn.css'
import './index.css'
export default function SearchBtn()
{
    return(
        <React.Fragment>
        <div className="search-btn">
            <input type="text" placeholder="Search Movie"/>
        </div>
        </React.Fragment>
    )
}