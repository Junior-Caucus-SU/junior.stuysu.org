import React from "react";
import NavBar from "./NonPage/NavBar";
import Schedule from "./NonPage/Schedule";
import BorderSvg from "../Images/BorderImg.svg";
import Background from "../Images/BackgroundHome.svg";
import "./Home.css";

export default function Home() {
    let homePage = (
        <div className="homepage-div" style={{ backgroundImage: `url(${Background})` }}>
            <NavBar {...{ page: "Home" }} />
            <div className="homepage-schedule">
                <Schedule/>
            </div>
            <div className="schedule-specifics">
                <img src={BorderSvg} className="schedule-border" alt="schedule border" />
            </div>
        </div>
    );
    return homePage;
}