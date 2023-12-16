import React from "react";
import Navbar from "./NonPage/NavBar";
import Texture from "./NonPage/Texture";
import Footer from "./NonPage/Footer";


export default function People(){
    let peoplePage = (
        <div>
            <Navbar {...{page:"People"}}/>
            <Texture/>
            <Footer/>
        </div>
    );
    return peoplePage;
}