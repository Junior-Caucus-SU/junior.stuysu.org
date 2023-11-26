import React from "react";
import './Nav.css';

export function NavButton(props) {
    if (props.selected) {
        return (
            <div className="navButton">
                <div className="button first line"></div>
                <div className="button second line"></div>
                <div className="button third line"></div>
                <div className="button-text">{props.name}</div>
            </div>
        )
    }
    return (<div>
        <div className="button-not-selected"></div>
        <div className="button-text">{props.name}</div>
        </div>)
}