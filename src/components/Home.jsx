import React from "react";
import NavBar from "./NavBar";

export default function Home() {
    let homePage = (<>
        <NavBar {...{ page: "Home" }} />
    </>);
    return homePage;
}
