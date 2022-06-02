import React from 'react';
// import background from "../assets/background.png";
import './Calender.scss';
import image from "../assets/image.png"

export default function Calender() {
  return (
    <div
          className="col-lg-6 calender"
        >
          <img src={image} alt="background-img" width={"100%"} />
          </div>
  )
}
