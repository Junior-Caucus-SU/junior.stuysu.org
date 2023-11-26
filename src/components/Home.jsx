import React from "react";
import Nav from "./Nav";

export default function Home(){
    let homePage = (<div>
        <Nav {...{page:"home"}}/>
    </div>);
    return homePage;
}
