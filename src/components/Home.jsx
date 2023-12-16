import React from "react";
import NavBar from "./NonPage/NavBar";
import Schedule from "./NonPage/Schedule";
import BorderPng from "../Images/BorderImg.png";//png so that there isn't a border for the imager
import Texture from "./NonPage/Texture";
import Footer from "./NonPage/Footer";
import "./Home.css";


export default function Home() {
    let homePage = (
        <>
            <div className="homepage-div">
                <NavBar {...{ page: "Home" }} />
                <div className="homepage-schedule">
                    {/* The Schedule Part */}
                    <Schedule />
                </div>
                <div className="schedule-specifics">
                    {/* The Below Part; with the blue img; should I make it fill div???; prob not */}
                    <img src={BorderPng} alt="Border" className="border-png" />
                </div>
                <div className="mission-statement">
                    {/* don't know if i should implement this with the the text or the fade effect */}
                </div>
                <div className="parallax">

                </div>
                <div className="end-scroll">
                </div>
            </div>
            <Footer />
            <Texture />
        </>
    );
    return homePage;
}