import React from 'react';
import './Nav.css';
import JuniorLogo from "../../Images/JuniorCaucusLogo.svg";
import { useState } from 'react';
import Banner from './Banner';

function NavBar(props) {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }

    return (<div className='head-nav'>
        <Banner />
        <div className="nav-container">
            <div className="juni-logo-container">
                <a href="/">
                    <img src={JuniorLogo} alt="Logo" className='junior-logo nav-menu-item' />
                </a>
            </div>
            <div className={`menu ${menuOpen? "show-menu": "hide-menu"}`}>
                <a href="/" className={currPageGet(props.page, "Home")}>{getText(props.page, "Home")}</a>
                <a href="/people" className={currPageGet(props.page, "People")}>{getText(props.page, "People")}</a>
                <a href="/events" className={currPageGet(props.page, "Events")}  >{getText(props.page, "Events")}</a>
                <a href="/resources" className={currPageGet(props.page, "Resources")} >{getText(props.page, "Resources")}</a>
            </div>

            <div class="nav-menu-item hamburger" onClick={toggleMenu}>
                <span className="decorative">b</span> Menu <span className="decorative">a</span>
            </div>
        </div>
    </ div>)
}



const currPageGet = (page, currPage) => {
    return currPage === page ? "nav-menu-item current-page" : "nav-menu-item";
}


const getText = (page, currPage) => {
    return currPage === page ? (<><span className="decorative">b</span> {currPage} <span className="decorative">a</span></>) : <>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{currPage}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</>;
}

export default NavBar;