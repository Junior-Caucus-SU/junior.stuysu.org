import React from "react";
import Navbar from "./NonPage/NavBar";
import Texture from "./NonPage/Texture";
import Initiatives from "./NonPage/Initiatives";
import Footer from "./NonPage/Footer"
import AnnouncementLine from "../Images/announcementsLine.svg"
import "./Events.css";
import Carousel from "./NonPage/Carousel";

export default function Events() {
    let eventsPage = (
        <div className="events-page">
            <Navbar {...{ page: "Events" }} />
            <Carousel/>
            <div className="events-body">
                <div className="all-initiatives-header">
                        <h1 className="title">All Initiatives</h1>
                        <img className="vector" alt="line" src={AnnouncementLine} />
                </div>
                <div className="all-initiatives-flexbox">
                    <Initiatives />
                </div>
            </div>

            <Footer />
            <Texture />
        </div>
    );
    return eventsPage;
}