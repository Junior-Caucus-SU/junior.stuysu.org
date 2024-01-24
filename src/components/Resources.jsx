import React from "react";
import NavBar from "./NonPage/NavBar";
import Texture from "./NonPage/Texture";
import Footer from "./NonPage/Footer";
import CustomCursor from "./NonPage/Cursor";
import "./Resources.css";
import ResourceCard from "./NonPage/ResourceCard";

export default function Resources() {
    let resourcesPage = (
        <div>
            <NavBar {...{ page: "Resources" }} />
            <div className="placeholder">
                <div className="resource-cards">
                    <ResourceCard  title="test" description="test" link="https://www.google.com" icon="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" />
                </div>

            </div>
            <Footer />
            <CustomCursor />
            <Texture />
        </div>
    );
    return resourcesPage;
}