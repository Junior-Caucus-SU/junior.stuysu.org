import React from "react";
import Footer from "./NonPage/Footer";
import NavBar from "./NonPage/NavBar";
import CustomCursor from "./NonPage/Cursor";
import Texture from "./NonPage/Texture";
import "./Socials.css";

export default function Socials() {
  return (
    <div>
      <NavBar {...{ page: "Socials" }} />
      <div className="socials"></div>
      <Footer />
      <Texture />
      <CustomCursor />
    </div>
  );
}
