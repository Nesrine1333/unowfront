import React from "react";
import ReactDOM from "react-dom";
import {Link} from "react-router-dom";
export const Homepage=()=>{
 
    
      return (
       
        <div className="homepage">
        homepage
        {
            <>
            
            <a> Personnalise</a>
        <Link to="/banner"> Continu </Link>
        </>
        }
        </div>
       
      );
}

