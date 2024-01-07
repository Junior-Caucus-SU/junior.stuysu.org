import "./Home.css";
import LottieView from 'lottie-react-native';
import React from "react";
import CustomCursor from "./NonPage/Cursor";
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
import HomeParallax from "./NonPage/HomeParallax";
import Papa from "papaparse";
import Data from "../schedules.json";
import { useState, useEffect } from "react";


export default function Home() {
    const [loading, setLoading] = useState(true); // this is ONLY to control animation
    const [minutes, setMinutes] = useState(5); //should be used for the schedule page
    const [currPeriod, setPeriod] = useState(0);
    const [dayType, setDayType] = useState("Regular");
    const [periodDuration, setPeriodDuration] = useState(40);
    const [minutesLeft, setMinutesLeft] = useState(0);
    //fetch the sheets data
    useEffect(() => {
        const fetchSheetsData = async () => {
            try {
                const ID = "1yB7zzw0I3hUjLwgKZXMpBioQ9FNkTg2bp3skTwtatHk";
                const sheet_name = "Schedule";
                const response = await fetch(`https://docs.google.com/spreadsheets/d/${ID}/gviz/tq?tqx=out:csv&sheet=${sheet_name}`);
                const text = await response.text();
                const today = new Date();
                const parsedData = Papa.parse(text, { header: true }).data;
                setDayType(parsedData[today.getDay()].DayType);
            } catch (err) {
                console.log(err);
            }
        };
        fetchSheetsData();
    }, []);


    //get period
    useEffect(() => {
        //set an interval
        const timer = setInterval(() => {
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
            getCurrentPeriod();
        }, 1000);
        return () => clearInterval(timer);
    }, [dayType]);

    // effects for the hidden elements
    useEffect(() => {
        const hiddenElements = document.querySelectorAll(".hidden");
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((element) => {
                if (element.isIntersecting) {
                    element.target.classList.add("show");
                } else {
                    element.target.classList.remove("show");
                }
            })
        })
        hiddenElements.forEach((entry) => {
            observer.observe(entry);
        })
    })

    //effects for the slow hidden elements (such as the mission statement)
    useEffect(() => {
        const hiddenElements = document.querySelectorAll(".slow-hidden");
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((element) => {
                if (element.isIntersecting) {
                    element.target.classList.add("show");
                } else {
                    element.target.classList.remove("show");
                }
            })
        })
        hiddenElements.forEach((entry) => {
            observer.observe(entry);
        })
    })

    const dayInfo = {
        dayType,
        minutes,
        minutesLeft,
        currPeriod,
        periodDuration
    }

    const periodTimes = getPeriodTimes(dayType);
    return (
        <>
            {loading && 
                <LottieView
                    source={require('../Images/unravel.json')}
                    autoPlay
                    speed={30}
                    onAnimationFinish={() => setLoading(false)}
                />
            }
            <Texture />
            <CustomCursor />
        <div className="homepage-div">
            <div>
                <NavBar {...{ page: "Home" }} />
            </div>
            <div className="homepage-schedule-container">
                <div className="schedule-banner-container hidden">
                    <Schedule className="schedule-banner" {...dayInfo} />
                </div>
                <div className="hidden bridge-pos">
                    <img src={TribecaBridge} alt="Tribeca bridge" className="tribeca-bridge" />
                </div>
                <div className="date-crawler-pos hidden">
                    <DateCrawler className="schedule-date-crawler hidden" />
                </div>
            </div>
            <img src={Border} alt="Border" className="border1" />
            <div className="schedule-specifics" >
                <div className="schedule-specifics-box hidden">
                    {getPeriods(getDayInfo(dayType)).map((period, index) => {
                        return (
                            <div className="period-crawler-container" key={index}>
                                <div className="period-name">
                                    {period}
                                </div>
                                <div className="period-time">
                                    {periodTimes[index]}
                                </div>
                            </div>)
                    })}
                </div>
                <img src={Moon} alt="Fancical Abstract Drawing of a Moon" className="moon-img hidden" />
                <img src={Sun} alt="Fancical Abstract Drawing of a Sun" className="sun-img hidden" />
                <div className="hidden specifics-line">
                    <img src={SpecificsLine} alt="Decorative Line Art" className="" />
                </div>
                <div className="all-schedules hidden">
                    <a href="https://www.google.com/search?q=copium&rlz=1C5CHFA_enUS996US996&oq=copium&gs_lcrp=EgZjaHJvbWUqBwgAEAAYjwIyBwgAEAAYjwIyDQgBEC4Y1AIYsQMYgAQyCggCEAAYsQMYgAQyCggDEAAYsQMYgAQyBwgEEAAYgAQyBwgFEAAYgAQyBwgGEAAYgAQyBwgHEAAYgAQyBwgIEAAYgAQyBwgJEAAYgATSAQgxMTcwajBqMagCALACAA&sourceid=chrome&ie=UTF-8#vhid=Ud5YHn3U1zaiIM:&vssid=l" className="all-schedules-link">View all schedules</a>
                </div>
            </div>
            <div className="mission-box">
                <h1 className="mission-statement">
                    <span className="slow-hidden">Welcome to the Yoo-Rhee caucus.</span><span className="slow-hidden"> We are committed to delivering on our promises </span>
                    <span className="slow-hidden">through well organized initiatives,</span><span className="slow-hidden"> including cabinet restructuring,</span> <span className="slow-hidden">enhancing
                        college readiness,</span><span className="slow-hidden"> and meaningful themed events.</span>
                </h1>
            </div>
            <div className="parallax">
                <HomeParallax />
            </div>
            <div className="end-scroll">
                <img src={PolaroidsSky} alt="Polaroids Sky" className="polaroids-sky" />
            </div>
        </div>
        <div className="hidden">
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
