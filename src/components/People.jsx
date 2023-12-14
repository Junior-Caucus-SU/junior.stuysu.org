import React from "react";
import Navbar from "./NonPage/NavBar";
import Texture from "./NonPage/Texture";


export default function People(){
    let peoplePage = (
        <div>
            <Navbar {...{page:"People"}}/>
            <Texture/>
        </div>
    );
    return peoplePage;
}