import React from 'react';
import './Nav.css';
import { NavButton } from './NavButton';

function Nav(props) {
    return (<div>
        <nav>
            <a href="/" className=""><NavButton {...{selected: props.page === "home"? true:false, name:"Home"}}/></a>
            <a href="/people"><NavButton {...{selected: props.page === "people"? true:false, name:"People"}}/></a>
            {/* <a href="/events"><NavButton {...{selected: props.page === "events"? true:false, name:"Events"}}/></a>
            <a href="/resources"><NavButton {...{selected: props.page === "resources"? true:false, name: "Resources"}}/></a> */}
        </nav>
    </div>)
}

export default Nav;