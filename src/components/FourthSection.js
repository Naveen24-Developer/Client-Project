import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "../styles/FourthSection.css";
import image1 from "../assets/1st Image.jpg";
import image2 from "../assets/2nd Image.jpg";
import image3 from "../assets/3rd Image.jpg";
import image4 from "../assets/4th Image.jpg";
import image5 from "../assets/5th Image.jpg";

const FourthSection = () => {
  return (
    <div className="fourth-section">
      <Carousel interval={3000} fade controls={false} indicators={true}>
        {/* Slides */}
        {[image1, image2, image3, image4, image5].map((image, index) => (
          <Carousel.Item key={index}>
            <div className="slide-container">
              <img
                src={image}
                className="slider-image"
                alt={`Borewell Service Slide ${index + 1}`}
              />
            </div>
          </Carousel.Item>
        ))}
      </Carousel>

      {/* Common Caption Below Carousel */}
      <div className="carousel-caption-container">
        <h2>Malai Borewell Services</h2>
        <p>
          Showcasing our expert borewell drilling process for reliable water
          access.
        </p>
        <button className="cta-button">
          Contact for your water solutions today
        </button>
      </div>
    </div>
  );
};

export default FourthSection;
