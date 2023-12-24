import React from "react";
import Navbar from "./NonPage/NavBar";
import Texture from "./NonPage/Texture";
import Initiatives from "./NonPage/Initiatives";

export default function Events() {
    let eventsPage = (
        <div className="events-page">
            <Navbar {...{ page: "Events" }} />
            <div className="all-initiatives-flexbox">   
                <Initiatives/>
            </div>
            <Texture />
        </div>
    );
    return eventsPage;
}