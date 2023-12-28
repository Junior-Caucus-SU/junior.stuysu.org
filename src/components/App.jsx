import Events from "./Events";
import People from "./People";
import Resources from "./Resources";
import NoPage from "./NoPage"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {useState, useEffect, useContext} from "react";
import Home from "./Home";
import Papa, { parse } from "papaparse";

export default function App() {
    useEffect(() => {
        const fetchSheetsData = async () => {
            try {
                const ID = "1yB7zzw0I3hUjLwgKZXMpBioQ9FNkTg2bp3skTwtatHk";
                const sheet_name = "Schedule";
                const response = await fetch(`https://docs.google.com/spreadsheets/d/${ID}/gviz/tq?tqx=out:csv&sheet=${sheet_name}`);
                const text = await response.text();
                const parsedData = Papa.parse(text, { header: true }).data;
                console.log(parsedData[new Date().getDay()].DayType);
                console.log(getDayInfo(parsedData[new Date().getDay()].DayType));
            } catch (err) {
                console.log(err);
            }
        };
        fetchSheetsData();
    }, []);



    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/people" element={<People />} />
                <Route path="/resources" element={<Resources />} />
                <Route path="/events" element={<Events/>} />
                <Route path="*" element={<Home />} />
            </Routes>
        </BrowserRouter>
    )
}

function getDayInfo(DayType) {
    const today = new Date();
    switch (DayType) {
        case "Regular":
            return {
                DayStart: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 8, 0),
                PeriodLength: [41,41,41,41,41,41,41,41,41,41],
                PeriodNames: ["1","2","3","4","5","6","7","8","9","10"]
            }
        case "Conference":
           return {
                DayStart: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 8, 0),
                PeriodLength: [37,37,37,37,37,37,37,37,37,37],
                PeriodNames: ["1","2","3","4","5","6","7","8","9","10"]};
        case "Homeroom":
            return { 
                DayStart: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 8, 0),
                PeriodLength: [40,40,40,12,40,40,40,40,40,40],
                PeriodNames: ["1","2","3","Homeroom","4","5","6","7","8","9","10"]};
        case "Extended":
            return {
                DayStart: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 8, 0),
                PeriodLength: [40,40,40,22,39,39,39,39,39,39,40],
                PeriodNames: ["1","2","3","Homeroom","4","5","6","7","8","9","10"]};
        case "Thurs-Fri":
            return {
                DayStart: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 8, 30),
                PeriodLength: [40,40,40,40,40,40,40,40,40,40],
                PeriodNames: ["1","2","3","4","5","6","7","8","9","10"]};
        default:
            return null; //no school or holiday
    }
}