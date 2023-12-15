import React from "react";
import NavBar from "./NonPage/NavBar";
import Texture from "./NonPage/Texture";


export default function NoPage() {
    return (
        <div className = "no-page">
            <NavBar {...{ page: "NaN" }} />
            <Texture />
        </div>
    );
}