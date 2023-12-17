import React from "react";
import Navbar from "./NonPage/NavBar";
import Texture from "./NonPage/Texture";
import Footer from "./NonPage/Footer";
import "./People.css";

export default function People(){
    let peoplePage = (
        <div>
            <Navbar page="People"/>
            <Texture/>
            <div className="meet-team-container">
                <div className="meet">Meet</div>
                <div className="the-team">The Team</div>
            </div>
            <div className="team-members">
                <div className="member">
                    <div className="image-placeholder"></div>
                    <div className="name">Josephine</div>
                    <div className="description">Description here...</div>
                </div>
                <div className="member">
                    <div className="image-placeholder"></div>
                    <div className="name">Grace</div>
                    <div className="description">Description here...</div>
                </div>
            </div>
            <Footer/>
        </div>
    );
    return peoplePage;
}
