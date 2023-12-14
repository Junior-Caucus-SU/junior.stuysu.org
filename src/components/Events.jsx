import React from "react";
import Navbar from "./NonPage/NavBar";
import Texture from "./NonPage/Texture";


export default function Events() {
    let eventsPage = (
        <div className="events-page">
            <Navbar {...{ page: "Events" }} />
            <Texture />
        </div>
    );
    return eventsPage;
}