import React from "react";
import NavBar from "./NavBar";

export default function Home(){
    let homePage = (<div>
        <NavBar {...{page:"Home"}}/>
    </div>);
    return homePage;
}
