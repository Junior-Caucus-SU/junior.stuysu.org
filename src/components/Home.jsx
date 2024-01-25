import "./Home.css";
import React from "react";
import CustomCursor from "./NonPage/Cursor";
import NavBar from "./NonPage/NavBar";
import Schedule from "./NonPage/Schedule";
import "./Chars.css"
import Border from "../Images/BorderImg.svg";
import TribecaBridge from "../Images/StuyBridgeDrawing.png";
import Texture from "./NonPage/Texture";
import Footer from "./NonPage/Footer";
import Sun from "../Images/sun.svg";
import Moon from "../Images/moon.svg";
import SpecificsLine from "../Images/SpecificsLineArt.svg";
import DateCrawler from "./NonPage/DateCrawler";
import HomeParallax from "./NonPage/HomeParallax";
import Papa from "papaparse";
import Data from "../schedules.json";
import { useState, useEffect, useRef } from "react";

function cSpanning(text) {
    return text.split('').map((char, index) => (
        <span key={index} className="character">{char}</span>
    ));
}

export default function Home() {
    const [minutes, setMinutes] = useState(5); //should be used for the schedule page
    const [currPeriod, setPeriod] = useState(0);
    const [dayType, setDayType] = useState("Regular");
    const [periodDuration, setPeriodDuration] = useState(40);
    const [minutesLeft, setMinutesLeft] = useState(0);
    const [AorBDay, setAorBDay] = useState("A");
    //fetch the sheets data


    const getCurrentPeriod = () => {
        const now = new Date();
        now.setHours(now.getHours())
        now.setMinutes(now.getMinutes());
        const schedule = getDayInfo(dayType);
        const periods = getTimes(schedule);
        for (let i = 0; i < periods.length; i++) {
            const start = new Date()
            start.setHours(parseInt(schedule[i].startTime.split(":")[0]));
            start.setMinutes(parseInt(schedule[i].startTime.split(":")[1]));
            const diff = now.getTime() - start.getTime();
            if (diff > 0) {
                setMinutes(diff / 60000);
                setMinutesLeft(schedule[i].duration - diff / 60000);
                setPeriod(periods[i]);
                setPeriodDuration(schedule[i].duration);
            } else {
                break;
            }
        }
    }

    const onScroll = () => {
        if (scRef.current) {
            const { top, bottom } = scRef.current.getBoundingClientRect();
            const viewportHeight = window.innerHeight;
            const isInView = bottom > -200 && bottom < viewportHeight;
            const isOutOfView = bottom <= -200 || top >= viewportHeight;
            document.querySelector('.mission-box').style.backgroundColor = isInView || !isOutOfView ? '#051e4f' : '#fbe4df';
            document.querySelector('.schedule-specifics').style.backgroundColor = isInView || !isOutOfView ? '#051e4f' : '#fbe4df';
        }
    };

    const fetchSheetsData = async () => {
        try {
            const ID = "1yB7zzw0I3hUjLwgKZXMpBioQ9FNkTg2bp3skTwtatHk";
            const sheet_name = "Schedule";
            const response = await fetch(`https://docs.google.com/spreadsheets/d/${ID}/gviz/tq?tqx=out:csv&sheet=${sheet_name}`);
            const text = await response.text();
            const today = new Date();
            const parsedData = Papa.parse(text, { header: true }).data;
            setDayType(parsedData[today.getDay()].DayType);
            setAorBDay(parsedData[today.getDay()].AorBDay);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        fetchSheetsData();
    }, []);

    //get period
    useEffect(() => {
        //set an interval
        const timer = setInterval(() => {
            getCurrentPeriod();
        }, 1000);
        return () => clearInterval(timer);
    });

    const scRef = useRef(null);
    useEffect(() => {
        window.addEventListener('scroll', onScroll);
        if (document.querySelector('.mission-box') && document.querySelector('.schedule-specifics')) {
            document.querySelector('.mission-box').style.backgroundColor = '#051e4f';
            document.querySelector('.schedule-specifics').style.backgroundColor = '#051e4f';
        }
        return () => window.removeEventListener('scroll', onScroll);
    }, []);


    const dayInfo = {
        dayType,
        minutes,
        minutesLeft,
        currPeriod,
        periodDuration,
        AorBDay
    }

    const periodTimes = getPeriodTimes(dayType);
    return (<>
        <Texture />
        <CustomCursor />
        <div className="homepage-div">
            <div>
                <NavBar {...{ page: "Home" }} />
            </div>
            <div className="homepage-schedule-container">
                <div className="schedule-banner-container">
                    <Schedule className="schedule-banner" {...dayInfo} />
                </div>
                <div className="bridge-pos">
                    <img src={TribecaBridge} alt="Tribeca bridge" className="tribeca-bridge" />
                </div>
                <div className="date-crawler-pos">
                    <DateCrawler className="schedule-date-crawler" />
                </div>
            </div>
            <img src={Border} alt="Border" className="border1" ref={scRef} />
            <div className="schedule-specifics">
                <div className="schedule-specifics-box">
                    {getPeriods(getDayInfo(dayType)).map((period, index) => {
                        return (
                            <div className="period-crawler-container" key={index}>
                                <div className="period-name">

                                    {period === currPeriod ?
                                        <div className="period-name-crawler">
                                            <span className="decorative">
                                                b</span>
                                            {period}
                                            <span className="decorative">
                                                a</span>
                                        </div>
                                        : <div>{period}</div>}
                                </div>
                                <div className="period-time">
                                    {periodTimes[index]}
                                </div>
                            </div>)
                    })}
                </div>
                <img src={Moon} alt="Fancical Abstract Drawing of a Moon" className="moon-img" />
                <img src={Sun} alt="Fancical Abstract Drawing of a Sun" className="sun-img" />
                <div className="specifics-line">
                    <img src={SpecificsLine} alt="Decorative Line Art" className="" />
                </div>
                <div className="all-schedules">
                    <a href="https://stuy.entest.org/2023-2024%20School%20Year%20Calendar%20v%209-4-2023%20v%2011_1__1_.pdf" className="all-schedules-link">View all schedules</a>
                </div>
            </div>
            <div className="mission-box">
                <h1 className="mission-statement">
                    {cSpanning("Welcome to the Yoo-Rhee caucus. We are committed to delivering on our promises \n through well organized initiatives, including cabinet restructuring, enhancing \n college readiness, and meaningful themed events.")}
                </h1>
            </div>
            <div className="parallax">
                <HomeParallax />
            </div>
            <div className="end-scroll">
                <div className="polaroids-sky polaroids polaroid-img"></div>
                <div className="polaroids-text polaroids polaroid-img">We'll stay with you this year</div>
                <div className="polaroids-bottom polaroids"></div>
            </div>
        </div>
        <div className="footer-positioning">
        <Footer />
        </div>
    </>
    );
}


const getTimes = (schedule) => {
    let final = [];
    for (let i = 0; i < schedule.length; i++) {
        final.push(schedule[i].name);
    }
    return final;
}

const getPeriods = (schedule) => {
    let final = [];
    for (let i = 0; i < schedule.length; i++) {
        if (!(schedule[i].name.includes("Before") && i !== 0)) {
            final.push(schedule[i].name);
        }
    }
    return final;
}

const getDayInfo = (DayType) => {
    switch (DayType) {
        case "Conference":
            return Data.Conference.schedule;
        case "Homeroom":
            return Data.Homeroom.schedule;
        case "Extended":
            return Data["Extended Homeroom"].schedule;
        case "Regular":
            return Data.Regular.schedule;
        case "TF":
            return Data["Thurs-Fri"].schedule;
        default:
            return Data.Regular.schedule;
    }
}

const getPeriodTimes = (DayType) => {
    const info = getDayInfo(DayType);
    let final = [];
    for (let i = 0; i < info.length; i++) {
        if (!(info[i].name.includes("Before") && i !== 0)) {
            if (i === 0) {
                final.push(`Before ${info[i + 1].startTime}`)
            } else if (i === info.length - 1) {
                final.push(`After ${info[i].startTime}`)
            } else {
                const start = info[i].startTime;
                const end = new Date();
                end.setHours(parseInt(start.split(":")[0]));
                end.setMinutes(parseInt(start.split(":")[1]) + info[i].duration);
                final.push(`${start} - ${end.getHours()}:${end.getMinutes() < 10 ? "0" + end.getMinutes() : end.getMinutes()}`)

            }
        }
    }
    return final;
}

const updateCharacterOpacity = () => {
    const chars = document.querySelectorAll('.mission-statement .character');
    const viewportHeight = window.innerHeight;

    chars.forEach(char => {
        const charRect = char.getBoundingClientRect();
        const charCenter = charRect.top + charRect.height / 2;
        const distanceFromCenter = Math.abs(viewportHeight / 2 - charCenter);
        const opacity = Math.max(0, 1 - 2 * distanceFromCenter / viewportHeight);
        char.style.opacity = opacity;
    });
};
const handleScroll = () => {
    window.requestAnimationFrame(updateCharacterOpacity);
};

window.addEventListener('scroll', handleScroll);
updateCharacterOpacity();
