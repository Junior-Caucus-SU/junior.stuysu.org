import React from "react";
import Navbar from "./NonPage/NavBar";

export default function People(){
    let peoplePage = (
        <div>
            <Navbar {...{page:"People"}}/>
        </div>
    );
    return peoplePage;
}