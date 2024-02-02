import React from "react";
import "./Banner.css";
import Texture from "../../Images/LowerBannerTexture.png";

export default function Banner(props) {
  return (
    <div>
      <div className="banner">
        <p className="banner-text">
          We’re raising money for Junior Prom 2024! Read our initiative{" "}
          <a href="/JProm" className="banner-links">
            here
          </a>
          .
        </p>
      </div>
      <img src={Texture} alt="Texture" className="banner-texture" />
    </div>
  );
}
