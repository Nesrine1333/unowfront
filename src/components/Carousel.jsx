import React, { useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import { Navbar } from "./navbar";

import "./Carousel.css";

export const Carousel = ({ data }) => {
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide(slide === data.length - 1 ? 0 : slide + 1);
  };

  const prevSlide = () => {
    setSlide(slide === 0 ? data.length - 1 : slide - 1);
  };

  return (
    <div  className="containerbanner">
  <Navbar/>
    <div className="carousel">
      <BsArrowLeftCircleFill onClick={prevSlide} className="arrow arrow-left" />
     
      <div className="text">
        <div>Let's build the future together</div>
        <p>"Coming together is a beginning , keeping together is progrss,worling together is success."HenryFord</p>
      </div>
      {data.map((item, idx) => {
        return (

            

        
                 <img
                      src={item.src}
                      alt={item.alt}
                      key={idx}
                      className={slide === idx ? "slide" : "slide slide-hidden"}
                    />
      


                 
        
        );
      })}

      <BsArrowRightCircleFill
        onClick={nextSlide}
        className="arrow arrow-right"
      />
   
      <span className="indicators">
        {data.map((_, idx) => {
          return (
            <button
              key={idx}
              className={
                slide === idx ? "indicator" : "indicator indicator-inactive"
              }
              onClick={() => setSlide(idx)}
            ></button>
          );
        })}
      </span>
      
    </div>
    <div>research</div>
    </div>
  );
};
