import React from 'react';
import "./ResourceCard.css";


export default function ResourceCard(props) {
    return (
        <div className="resource-card-super">
            <a href={props.link} className="resource-links">
                <div className="resource-card-head">
                    <h1 className="resource-title resource-title">{props.title}</h1>
                </div>
                <p className="resourcecard-description resource-text">
                    {props.description}
                </p>
                <div className="content">
                    <div>
                        <p className="resource-text">Release Date</p>
                        <p className=" resource-text">
                            {props.release}
                        </p>
                    </div>
                    <a href={props.link}>
                        <div className="resource-button">
                            <span className="resource-text">
                                Check out Resource
                            </span>
                        </div>
                    </a>
                </div>
            </a>
        </div>

    );
}
