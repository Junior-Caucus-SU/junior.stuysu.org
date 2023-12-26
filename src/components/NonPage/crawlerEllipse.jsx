import "./crawlerEllipse.css"
import Crawl from "../../Images/EllipseCrawl.svg";
import lightCrawl from "../../Images/lightEllipseCrawl.svg";
import React from "react";

export default function CrawlerEllipse(props) {
    const date = new Date();
    return(<>
    <div className="ellipse-crawler">
        <img src={date.getDay() < props.itemText[0]? lightCrawl:Crawl} alt={date.getDay() < props.itemText[0]? "light ellipse":"normal ellipse"} className="ellipse-item"/>
        <p className="dateText">{props.itemText[0]}</p>
    </div>
    </>)
}
