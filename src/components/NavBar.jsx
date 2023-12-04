import React from 'react';
import './Nav.css';
import StuyLogo from "../Group 64.svg";
 
function NavBar(props) {
    return (<div class="navbar">
        <div class="navbar-header">
            <img src={StuyLogo} alt="Logo" />
                <h1>Junior</h1> <h1>Caucus 2023</h1>
        </div>
        <nav className="menu">
            <a href="/" className={props.page==="Home"?"menu-item current-page" : "menu-item"} >Home</a>
            <a href="/people" className={props.page==="People"?"menu-item current-page": "menu-item"} >People</a>
            <a href="/events" className={props.page==="Events"?"menu-item current-page": "menu-item"} >Events</a>
            <a href="/resources" className={props.page==="Resources"?"menu-item current-page": "menu-item"}>Resources</a>
        </nav>
    </div>)
}

export default NavBar;