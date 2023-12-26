import React, {useEffect, useState} from "react";
import "./DateCrawler.css";

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
                setDayTypes();
            } catch (err) {
                console.log(err);
            }
        };
        fetchSheetsData();
    }, []);
    console.log(dayType);
    return (
        <div className="schedule-date-crawler">

        </div>
    );
}