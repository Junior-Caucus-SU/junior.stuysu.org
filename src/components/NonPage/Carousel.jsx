import React, { useEffect, useState } from 'react';
import "./Carousel.css";
import CarouselImageOne from "../../Images/CarouselImage1.png";
import CarouselImageTwo from "../../Images/CarouselImage2.png";


const getBackgroundStyle = (image) => {
  return {
    background: `linear-gradient(0deg,rgba(0, 0, 0, 0.2) 0%,rgba(0, 0, 0, 0.2) 100%, url(${image}), lightgray 50% / cover no-repeat)`,
    objectFit: "cover",
    width: "90vw",
    height: "80vh",
    margin: "1vw",
  }
}

function CurrentItem({ direction }) {
  if (direction === 0) {
    return (
      <div className="current-item" style={{ transform: `translateX(0%)` }}>
        <img className="images" src={CarouselImageOne} alt="" />
        <div className="image-text">Homecoming<br />Fundraiser</div>
        <img className="images" src={CarouselImageTwo} alt="" />
      </div>
    );
  }
  return (
    <div className="current-item" style={{ transform: `translateX(-100%)` }}>
      <div className="images" style={getBackgroundStyle("../../Images/CarouselImage1.png")} />
      <div className="image-text">Homecoming<br />Fundraiser</div>
      <div className="images" style={getBackgroundStyle("../../Images/CarouselImage2.png")} />        </div>
  );
}

const Carousel = () => {
  const [scrollDirection, setScrollDirection] = useState(0);
  const [prevScrollY, setPrevScrollY] = useState(1);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > prevScrollY) {
      setScrollDirection(1);

    } else if (currentScrollY < prevScrollY) {
      setScrollDirection(0);
    }

    setPrevScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollY]);

  return (
    <div className="carousel">
      <CurrentItem direction={scrollDirection} />
    </div>)
};

export default Carousel;

