import React from "react";
import NavBar from "./NavBar";

export default function Resources() {
    let resourcesPage = (
        <div>
            <NavBar {...{ page:"Resources" }} />
        </div>
    );
    return resourcesPage;
}