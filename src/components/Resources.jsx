import React from "react";
import NavBar from "./NonPage/NavBar";
import Texture from "./NonPage/Texture";
import Footer from "./NonPage/Footer";
import "./Resources.css";

export default function Resources() {
    let resourcesPage = (
        <div>
            <NavBar {...{ page:"Resources" }} />
            <div className="placeholder"></div>
            <Footer />
            <Texture />
        </div>
    );
    return resourcesPage;
}