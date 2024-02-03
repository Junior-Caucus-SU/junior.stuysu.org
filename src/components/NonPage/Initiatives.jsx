import React, { useState, useEffect } from 'react';
import Papa from 'papaparse';
import './Initiatives.css';

export default function AllInitiatives(props) {
    const [initiativesData, setEventsInfo] = useState([]);
    const [showMore, setShowMore] = useState([]);
    console.log(props.dayInfo);
    useEffect(() => {
        const fetchSheetsData = async () => {
            try {
                const ID = "1yB7zzw0I3hUjLwgKZXMpBioQ9FNkTg2bp3skTwtatHk";
                const sheet_name = "Announcements";
                const response = await fetch(`https://docs.google.com/spreadsheets/d/${ID}/gviz/tq?tqx=out:csv&sheet=${sheet_name}`);
                const text = await response.text();
                const parsedData = Papa.parse(text, { header: true }).data.reverse();
                setEventsInfo(parsedData);
                setShowMore(Array(parsedData.length).fill(false));
            } catch (err) {
                console.log(err);
            }
        };
        fetchSheetsData();
    }, []);

    const handleShowMoreToggle = (index) => {
        setShowMore((prevShowMore) => {
            const newShowMore = [...prevShowMore];
            newShowMore[index] = !newShowMore[index];
            return newShowMore;
        });
    };

    return (
        <div className="all-initiatives">
            <div className="frame">
                {initiativesData.map((initiative, index) => (
                    <div className="event" key={index}>
                        <p className="event-date">{initiative.Date}</p>
                        <h4 className="event-title">{initiative.Title}</h4>
                        <p className="event-text">
                            {showMore[index] ? initiative.Text : initiative.Text.substring(0, 100)}
                        </p>
                        <button className="show-more" onClick={() => handleShowMoreToggle(index)}>
                            {showMore[index] ? "Show Less" : "Show More..."}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}
