import React from 'react';
import './Nav.css';
import JuniorLogo from "../../Images/JuniorCaucusLogo.svg";
import Banner from './Banner';

function NavBar(props) {
    return (<>
        <Banner />
        <div className="nav-container">
            <div className="logo">
                <a href="/">
                    <img src={JuniorLogo} alt="Logo" className='juinor-logo menu-item' />
                </a>
            </div>

            <div className="menu">
                <a href="/" className={currPageGet(props.page, "Home")}>{getText(props.page, "Home")}</a>
                <a href="/people" className={currPageGet(props.page, "People")}>{getText(props.page, "People")}</a>
                <a href="/events" className={currPageGet(props.page, "Events")}  >{getText(props.page, "Events")}</a>
                <a href="/resources" className={currPageGet(props.page, "Resources")} >{getText(props.page, "Resources")}</a>
            </div>

        </div>
    </>)
}

function currPageGet(page, currPage) {
    return currPage === page ? "menu-item current-page" : "menu-item";
}


function getText(page, currPage) {
    return currPage === page ? (<><span className="decorative">b</span> {currPage} <span className="decorative">a</span></>) : <>{"  " + currPage + "  "}</>;
}

export default NavBar;