import React from "react";
import "./ResourceCard.css";

export default function ResourceCard(props) {
  return (
    <div className="resource-card-super">
      <a href={props.link} className="resource-links">
        <div className="resource-card-head">
          <h1 className="resource-title">{props.title}</h1>
          <p className=" resource-text">{props.release}</p>
        </div>
        <div className="content"></div>
      </a>
    </div>
  );
}
