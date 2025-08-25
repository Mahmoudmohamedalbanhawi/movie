import React from "react";
import './navbar.css'
import Logo from './logo'
import './index.css'
import SearchBtn from "./SearchBtn";
import NumResult from "./NumResult";
export default function Navbar()
{
    return(
        <React.Fragment>
        <div className="navbar">
           <div className="container  d-flex align-items-center " style= {{justifyContent:"space-around"}}>
            <Logo />
            <SearchBtn/>
            <NumResult/>
            </div>
           </div>
        </React.Fragment>
    )
}