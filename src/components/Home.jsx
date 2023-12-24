import React from "react";
import NavBar from "./NonPage/NavBar";
import Schedule from "./NonPage/Schedule";
import Border from "../Images/BorderImg.svg";
import TribecaBridge from "../Images/StuyBridgeDrawing.png";
import Texture from "./NonPage/Texture";
import Footer from "./NonPage/Footer";
import "./Home.css";


export default function Home() {
    let homePage = (
        <>
            <Texture />
            <div className="homepage-div">
                <NavBar {...{ page: "Home" }} />
                <div className="homepage-schedule">
                    <Schedule />
                    <img src={TribecaBridge} alt="Tribeca bridge" className="bridge" />
                </div>
                <img src={Border} alt="Border" className="border1" />
                <div className="schedule-specifics">
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
        </>
    );
    return homePage;
}