import React, { useState} from 'react';
import "./Carousel.css";


function Carousel() {
  const [slide, setSlide] = useState(0)
  const [translate, setTranslate] = useState("0%")
  const [initialX, setInitialX] = useState(null)
  const [finalX, setFinalX] = useState(null)
  const [drag, setDrag] = useState(false)
  const [zoom, setZoom] = useState(false)

  const onMouseDown = (e) => {
    setInitialX(e.screenX)
    setDrag(true)
  }

  const onMouseUp = (e) => {
    
    setDrag(false)
    setFinalX(e.screenX) 
    if (initialX === finalX) {
      setZoom(true)
      if (slide === 0) {
        setTranslate("-100%")
        setSlide(1)
      }
      else {
        setTranslate("0%")
        setSlide(0)
      }
      setTimeout(() => {
        setZoom(false)
      }, 80)
      return
    }
    if (slide === 0 && translate.substring(0, translate.length - 2) < 0) {
      setTranslate("-100%")
      setSlide(1)
    }
    else if (slide === 0 && translate.substring(0, translate.length - 2) > 0) {
      setTranslate("0%")
    }
    if (slide === 1 && translate.substring(0, translate.length - 2) > 0) {
      setTranslate("0%")
      setSlide(0)
    }
    else if (slide === 1 && translate.substring(0, translate.length - 2) < 0) {
      setTranslate("-100%")
    }
    setZoom(false)
  }

  const onMouseMove = (e) => {
    const bodyWidth = document.getElementById("root").clientWidth
    if (drag) {
      setFinalX(e.screenX)
      if (Math.abs(finalX - initialX) > 0.6 * bodyWidth) {
        return
      }
      if (((slide === 0 && finalX - initialX < 0) || (slide === 1 && finalX - initialX > 0)) && (finalX != null)) {
        setZoom(true)
        setTranslate(finalX - initialX + "px")  
        }
    }     
    }
  
  return (
    <div className="carousel" onMouseDown={onMouseDown} onMouseMove={onMouseMove} onMouseUp={onMouseUp}>
      <div className="current-item"  style={{ transform: "translateX("+ translate + ")" + (zoom ? " scale(0.7)":"")}} >
        <div className="image-one" > 
          <div className="image-text">Homecoming<br />Fundraiser</div>
        </div>
        <div className="image-two"/>
      </div>
    </div>
  );
}


export default Carousel;

