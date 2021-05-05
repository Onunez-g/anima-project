import React from 'react'
import './CarouselItem.scss'
const CarouselItem = (props) => {
  return (
  <>
    <div className="item">
      <img src={props.src} alt={props.alt}/>
      <button className="showMore">View Now</button>
      <div>
        <h2>{props.name}</h2>
      </div>
    </div>
  </>
  );
}

export default CarouselItem