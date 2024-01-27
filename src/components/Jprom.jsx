import React from "react";
import "./Jprom.css";
import NavBar from "./NonPage/NavBar";
import Cursor from "./NonPage/Cursor";
import Footer from "./NonPage/Footer";

export default function JProm() {
    return (
        <div>
            <NavBar page="JProm" />
            <div className="jprom-body">
                
            </div>
            <Footer />
            <Cursor />
        </div>
    );
}