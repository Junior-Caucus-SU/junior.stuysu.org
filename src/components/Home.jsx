import React from "react";
import NavBar from "./NonPage/NavBar";
import Schedule from "./NonPage/Schedule";
import BorderPng from "../Images/BorderImg.png";//png so that there isn't a border for the imager
import Texture from "./NonPage/Texture";
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
            </div>
            <Texture />
        </>
    );
    return homePage;
}