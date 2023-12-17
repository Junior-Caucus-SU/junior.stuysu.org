import React, { useEffect, useRef } from "react";
import Navbar from "./NonPage/NavBar";
import Texture from "./NonPage/Texture";
import Footer from "./NonPage/Footer";
import "./People.css";

export default function People() {
  // Create a ref for the box elements
  const boxRef = useRef([]);

  useEffect(() => {
    // After the component has mounted
    boxRef.current.forEach((box, index) => {
      if (box) {
        const width = box.getBoundingClientRect().width;
        console.log(width);
        // Check if it is the presidents-box (which is rotated 90 degrees counterclockwise)
        if (index === 0) {
            box.style.transformOrigin = `bottom left`;
          box.style.transform = `rotate(90deg) translateX(-${width}px)`;
          // Set the transform origin to the bottom left corner
            
        }
        // Check if it is the chiefs-box (which is rotated -90 degrees clockwise)
        else if (index === 1) {
            box.style.transformOrigin = `bottom right`;
          box.style.transform = `rotate(-90deg) translateX(${width}px)`;
          // Set the transform origin to the bottom right corner
            
        }
      }
    });
  }, []);  
  
  let peoplePage = (
    <div>
      <Navbar page="People"/>
      <Texture/>
      <div className="meet-team-container">
        <div className="meet">Meet</div>
        <br />
        <div className="the-team">The Team</div>
      </div>

      <div className="presidents people-section">
        <div className="presidents-box box" ref={el => boxRef.current[0] = el}>
          <div className="presidents-box-text box-text">Presidents</div>
        </div>
        <div className="presidents-container subgroup-container">
          <div className="president person-container">
            <div className="image-placeholder"></div>
            <div className="name">Josephine</div>
            <div className="description">Description here...</div>
          </div>
          <div className="president person-container">
            <div className="image-placeholder"></div>
            <div className="name">Grace</div>
            <div className="description">Description here...</div>
          </div>
        </div>
      </div>

      <div className="chiefs people-section">
        <div className="chiefs-container subgroup-container">
          <div className="chiefs person-container">
            <div className="image-placeholder"></div>
            <div className="name">John J. Wang</div>
            <div className="description">Description here...</div>
          </div>
          <div className="chiefs person-container">
            <div className="image-placeholder"></div>
            <div className="name">Ethan Sie</div>
            <div className="description">Description here...</div>
          </div>
        </div>
        <div className="chiefs-box box" ref={el => boxRef.current[1] = el}>
          <div className="chiefs-box-text box-text">Chiefs of Staff</div>
        </div>
      </div>
      <Footer/>
    </div>
  );
  return peoplePage;
}
