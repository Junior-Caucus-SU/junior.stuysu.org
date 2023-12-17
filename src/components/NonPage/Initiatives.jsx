import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Initiatives.css';
import Papa from 'papaparse';

export default function AllIntiatives() {
    const [initiativesData, setEventsData] = useState([]);   

    const fetchEventsData = async () => {
        try {
            const csvURL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQcRchSVEdFMcg-5egvZvJ0dsJmj-cEfEkcjutrDzJcA8PQZvosXIPPJMoPrNvim3Ych-fRBnF5ibRF/pub?gid=0&single=true&output=csv";
            const response = await fetch(csvURL);
            const text = await response.text();
            const parsedData = Papa.parse(text, { header: true }).data;
            setEventsData(parsedData)
        } catch (error) {
          console.error('Error fetching schedule:', error);
        }
      };

    useEffect(() => {
        fetchEventsData();
    }, [])
    
    return (
        <div className="all-initiatives">
            <div className="all-initiatives-header">
                <div className="title">
                    <div className="text-wrapper">All Initiatives</div>
                </div>
                <div className="line">
                    <img className="vector" alt="line" src="needtoimport" />
                </div>
            </div>   
            <div className="frame">
            {initiativesData.map((initiative, index) => (
                <div className="event">
                    <div className="event-date">{initiative.Date}</div>
                    <p className="event-text">
                        {initiative.Text}
                    </p>
                </div>
            ))}
            </div>
        </div>
      );
    }

