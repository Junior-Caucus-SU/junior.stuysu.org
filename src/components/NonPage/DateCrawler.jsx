import React, { useEffect, useState } from "react";
import "./DateCrawler.css";
import crawlEllipse from "../../Images/EllipseCrawl.svg";

export default function DateCrawler() {
    //fetch sheet data
    const [dayType, setDayTypes] = useState(["A1", "B1", "A2", "B2", "A3"]);
    useEffect(() => {
        const fetchSheetsData = async () => {
            try {
                const ID = "1yB7zzw0I3hUjLwgKZXMpBioQ9FNkTg2bp3skTwtatHk";
                const sheet_name = "Schedule";
                const response = await fetch(`https://docs.google.com/spreadsheets/d/${ID}/gviz/tq?tqx=out:csv&sheet=${sheet_name}`);
                const text = await response.text();
                let data = text.split("\n");
                data = data.map(x => {
                    return x.replaceAll("\"", "").split(",");
                });
                data.shift();
                setDayTypes(data);
            } catch (err) {
                console.log(err);
            }
        };
        fetchSheetsData();
    }, []);
    console.log(dayType);
    return (<div>
        {dayType.map((day,  i) => (

            <div className={day[0].toLowerCase()} key={i}>
                {console.log(day)}
                {console.log(i)}
                <img src={crawlEllipse} alt="ellipse" className={day[0]+"-ellipse crawl-ellipse"}/>
                <p> {day[1]} </p>
            </div>
    )) }
      </div>);
}
