import React from "react";
import ReactDOM from "react-dom";
import {Link} from "react-router-dom";
import "./homepage.css"


export const Homepage=()=>{
 
    
      return (
       
        <div className="homepage">
       <div className="content">
        <div className="title">AN INNOVATIVE HOLISTIC <br/>
        <span >E-LEARNING</span> PLATFORM</div>
<div className="paragraph">
U!NOW IS NOT JUST AN E-LEARNING  PLATFORM, BUT A REVOLUTION IN THE FIELD OF EDUCATION. OUR AMBITION IS TO MAKE LEARNING ACCESSIBLE, FLEXIBLE, ENGAGING, AND EFFECTIVE FOR EVERYONE, FROM STUDENTS AND RETRAINING PROFESSIONALS TO COMPANIES AND TRAINING ORGANIZATIONS.
</div>
<div className="list">
  <ul>
    <li>Varied, tailored content</li>
    <li>Flexible learning formats</li>
    <li>Cutting-edge technologies for an immersive experience</li>
    <li>Modular and customizable solution
</li>
    <li>Easy, universal access
</li>
    <li>Attractive, flexible pricing
</li>
  </ul>



</div>
<div className="button">
        <a>Personnaliser</a>
    <Link to='/banner'>continue</Link>
    </div>
    </div> 
    
        </div>
       
      );
}

