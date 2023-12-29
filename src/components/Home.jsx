import "./Home.css";
import React from "react";
import NavBar from "./NonPage/NavBar";
import Schedule from "./NonPage/Schedule";
import Border from "../Images/BorderImg.svg";
import TribecaBridge from "../Images/StuyBridgeDrawing.png";
import Texture from "./NonPage/Texture";
import Footer from "./NonPage/Footer";
import PolaroidsSky from "../Images/PolaroidsSky.png";
import Sun from "../Images/sun.svg";
import Moon from "../Images/moon.svg";
import SpecificsLine from "../Images/SpecificsLineArt.svg";
import DateCrawler from "./NonPage/DateCrawler";
import Papa from "papaparse";
import { useState, useEffect, createContext } from "react";

const DayContext = createContext(null);

export default function Home() {
    const [minutes, setMinutes] = useState(5);
    const [currPeriod, setPeriod] = useState(0);
    const [dayType, setDayType] = useState("Regular");
    useEffect(() => {
        const fetchSheetsData = async () => {
            try {
                const ID = "1yB7zzw0I3hUjLwgKZXMpBioQ9FNkTg2bp3skTwtatHk";
                const sheet_name = "Schedule";
                const response = await fetch(`https://docs.google.com/spreadsheets/d/${ID}/gviz/tq?tqx=out:csv&sheet=${sheet_name}`);
                const text = await response.text();
                const parsedData = Papa.parse(text, { header: true }).data;
                setDayType(parsedData[0].DayType);
            } catch (err) {
                console.log(err);
            }
        };
        fetchSheetsData();
    }, []);
    //get period
    useEffect(() => {
        const interval = setInterval((DayType) => {
            const dayInfo = getDayInfo(DayType);
            let diff = (new Date().getTime() - dayInfo.DayStart.getTime()) / 60000; let period = 1, delay = 5;
            if (diff < 0) return -1;
            else {
                for (let i = 0; i < dayInfo.PeriodLength.length + delay; i++) {
                    //determine the index (period) that the day falls into
                    if (diff >= dayInfo.PeriodLength[i] + delay) { // if the time can handle the next period
                        period++;
                        diff -= dayInfo.PeriodLength[i] + delay;
                    }
                    else {
                        setMinutes(diff);
                        setPeriod(period);
                    }
                }
                setMinutes(diff);
                setPeriod(period);
            }
        }, 1000);
        return () => clearInterval(interval);
    }, []);
    const dateProps = {
        dayType: dayType,
        minutes: minutes,
        currPeriod: currPeriod
    };


    return ( <>
            <Texture />
                <div className="homepage-div">
                    <NavBar {...{ page: "Home" }} />
                    <div className="homepage-schedule-container">
                        <div className="schedule-banner-container">
                            <Schedule className="schedule-banner" props = {dateProps} />
                        </div>
                        <img src={TribecaBridge} alt="Tribeca bridge" className="tribeca-bridge" />
                        <div className="date-crawler-pos">
                            <DateCrawler className="schedule-date-crawler" props = {dateProps} />
                        </div>
                    </div>
                    <img src={Border} alt="Border" className="border1" />
                    <div className="schedule-specifics" props = {dateProps}>
                        <div className="box-one">
                        </div>
                        <div className="box-two" props={dateProps}>
                        </div>
                    <img src={Moon} alt="Fancical Abstract Drawing of a Moon" className="moon-img" />
                    <img src={Sun} alt="Fancical Abstract Drawing of a Sun" className="sun-img" />
                    <img src={SpecificsLine} alt="Decorative Line Art" className="specifics-line" />
                    <div className="all-schedules">
                        <a href="https://www.google.com/search?q=copium&rlz=1C5CHFA_enUS996US996&oq=copium&gs_lcrp=EgZjaHJvbWUqBwgAEAAYjwIyBwgAEAAYjwIyDQgBEC4Y1AIYsQMYgAQyCggCEAAYsQMYgAQyCggDEAAYsQMYgAQyBwgEEAAYgAQyBwgFEAAYgAQyBwgGEAAYgAQyBwgHEAAYgAQyBwgIEAAYgAQyBwgJEAAYgATSAQgxMTcwajBqMagCALACAA&sourceid=chrome&ie=UTF-8#vhid=Ud5YHn3U1zaiIM:&vssid=l" className="all-schedules-link">View all schedules</a>
                    </div>
                </div>
                <div className="mission-box">
                    <h1 className="mission-statement">
                        Welcome to the Yoo-Rhee caucus. We are committed to delivering on our promises through well organized initiatives, including cabinet restructuring, enhancing college readiness, and meaningfu themed events.
                    </h1>
                </div>
                <div className="parallax">

                </div>
                <div className="end-scroll">
                    <img src={PolaroidsSky} alt="Polaroids Sky" className="polaroids-sky" />
                </div>
            </div>
            <Footer />
        </>
    );
}


function getDayInfo(DayType) {
    const today = new Date();
    switch (DayType) {
        case "Conference":
            return {
                DayStart: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 8, 0),
                PeriodLength: [37, 37, 37, 37, 37, 37, 37, 37, 37, 37],
                PeriodNames: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
            };
        case "Homeroom":
            return {
                DayStart: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 8, 0),
                PeriodLength: [40, 40, 40, 12, 40, 40, 40, 40, 40, 40],
                PeriodNames: ["1", "2", "3", "Homeroom", "4", "5", "6", "7", "8", "9", "10"]
            };
        case "Extended":
            return {
                DayStart: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 8, 0),
                PeriodLength: [40, 40, 40, 22, 39, 39, 39, 39, 39, 39, 40],
                PeriodNames: ["1", "2", "3", "Homeroom", "4", "5", "6", "7", "8", "9", "10"]
            };
        case "Thurs-Fri":
            return {
                DayStart: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 8, 30),
                PeriodLength: [40, 40, 40, 40, 40, 40, 40, 40, 40, 40],
                PeriodNames: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
            };
        default:
            return {
                DayStart: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 8, 0),
                PeriodLength: [41, 41, 41, 41, 41, 41, 41, 41, 41, 41],
                PeriodNames: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
            }; //no school or holiday
    }
}


