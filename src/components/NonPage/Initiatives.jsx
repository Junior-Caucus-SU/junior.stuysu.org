import React, { useState, useEffect } from 'react';
import Papa from 'papaparse';
import './Initiatives.css';

export default function AllIntiatives(props) {
    const [initiativesData, setEventsInfo] = useState([]);
    useEffect(() => {
        const fetchSheetsData = async () => {
            try {
                const ID = "1yB7zzw0I3hUjLwgKZXMpBioQ9FNkTg2bp3skTwtatHk";
                const sheet_name = "Announcements";
                const response = await fetch(`https://docs.google.com/spreadsheets/d/${ID}/gviz/tq?tqx=out:csv&sheet=${sheet_name}`);
                const text = await response.text();
                const parsedData = Papa.parse(text, { header: true }).data;
                setEventsInfo(parsedData);
            } catch (err) {
                console.log(err);
            }
        };
        fetchSheetsData();
    }, []);


    return (
        <div className="all-initiatives">
            <div className="frame">
            {initiativesData.map((initiative, index) => (
                <div className="event">
                    <p className="event-date">{initiative.Date}</p>
                    <h4 className="event-title">{initiative.Title}</h4>
                    <p className="event-text">
                        {initiative.Text}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}

