import React from "react";
import NavBar from "./NavBar";
import Banner from "./Banner";

export default function Home() {
    let homePage = (<>
        <Banner />

        <NavBar {...{ page: "Home" }} />
    </>);
    return homePage;
}
