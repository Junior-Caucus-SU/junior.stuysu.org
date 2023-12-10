import React from "react";
import Navbar from "./NonPage/NavBar";


export default function Events() {
    let eventsPage = (
        <div>
            <Navbar {...{ page: "Events" }} />
        </div>
    );
    return eventsPage;
}