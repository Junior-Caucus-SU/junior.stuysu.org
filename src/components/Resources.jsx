import React from "react";
import NavBar from "./NonPage/NavBar";
import Texture from "./NonPage/Texture";

export default function Resources() {
    let resourcesPage = (
        <div>
            <NavBar {...{ page:"Resources" }} />
            <Texture />
        </div>
    );
    return resourcesPage;
}