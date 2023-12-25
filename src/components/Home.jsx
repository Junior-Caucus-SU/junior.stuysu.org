import React from "react";
import NavBar from "./NonPage/NavBar";
import Schedule from "./NonPage/Schedule";
import Border from "../Images/BorderImg.svg";
import TribecaBridge from "../Images/StuyBridgeDrawing.png";
import Texture from "./NonPage/Texture";
import Footer from "./NonPage/Footer";
import PolaroidsSky from "../Images/PolaroidsSky.png";
import Sun from "../Images/sun.svg";
import Moon from "../Images/moon.svg";
import SpecificsLine from "../Images/SpecificsLineArt.svg";
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
                    <div className="box-one">

                    </div>
                    <div className="box-two">

                    </div>
                    <img src={Moon} alt="Fancical Abstract Drawing of a Moon" className="moon-img"/>
                    <img src={Sun} alt="Fancical Abstract Drawing of a Sun" className="sun-img"/>
                    <img src={SpecificsLine} alt="Decorative Line Art" className="specifics-line"/>
                </div>
                <div className="mission-box">
                    <h1 className="mission-statement">
                    Welcome to the Yoo-Rhee caucus. We are committed to delivering on our promises through wellorganized initiatives, includincabinet restructuring, enhancin college readiness, and meaningfu themed events.
                    </h1>
                </div>
                <div className="parallax">
                
                </div> 
                <div className="end-scroll">
                    <img src={PolaroidsSky} alt="Polaroids Sky" className="polaroids-sky"/>
                </div>
            </div>
            <Footer />
        </>
    );
    return homePage;
}