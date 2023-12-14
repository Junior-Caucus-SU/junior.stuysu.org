import React from "react";
import NavBar from "./NonPage/NavBar";
import Schedule from "./NonPage/Schedule";
import BorderSvg from "../Images/BorderImg.svg";
import "./Home.css";

export default function Home() {
    let homePage = (
        <>
            <div className="homepage-div">
                <NavBar {...{ page: "Home" }} />
                <div className="homepage-schedule">
                    <Schedule />
                </div>
                <div className="schedule-specifics">
                    <img src={BorderSvg} alt="Border" className="border-svg" />
                </div>
            </div>
            <div className="image-overlay"> </div>
        </>
    );
    return homePage;
}