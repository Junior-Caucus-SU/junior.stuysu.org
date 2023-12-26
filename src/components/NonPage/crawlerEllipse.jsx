import "./crawlerEllipse.css"
import Crawl from "../../Images/EllipseCrawl.svg";
import lightCrawl from "../../Images/lightEllipseCrawl.svg";
import React from "react";

export default function CrawlerEllipse(props) {
    const date = new Date();
    let dayPassed = (date.getDay() < props.itemText[0])? true:false;
    return(<>
    <div className="ellipse-crawler">
        {console.log(dayPassed)}
        <img src={dayPassed? lightCrawl:Crawl} alt={dayPassed? "light ellipse":"normal ellipse"} className="ellipse-item"/>
        <p className="dateText">{props.itemText[0]}</p>
    </div>
    </>)
}
