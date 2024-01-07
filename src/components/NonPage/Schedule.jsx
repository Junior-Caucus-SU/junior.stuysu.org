import React, { useState, useMemo, useEffect } from 'react';
import './Schedule.css';

const dateFormat = {
  longWK: { weekday: 'long', month: 'long', day: 'numeric' },
  shortWK: { weekday: 'short' },
  timeHMS: { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false }
};

export default function ScheduleBanner(props) {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());
  useEffect(() => {
    const timer = setInterval(() => setCurrentDateTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, [])

  const isWeekend = useMemo(() => currentDateTime.getDay() === 0 || currentDateTime.getDay() === 6, [currentDateTime]);
  const timeString = currentDateTime.toLocaleTimeString('en-US', dateFormat.timeHMS);
  const dateString = currentDateTime.toLocaleDateString('en-US', dateFormat.longWK);


  const circumference = 2 * Math.PI * 50;
  const progress = isWeekend ? 0 : props.minutes / (props.periodDuration || 1);
  const strokeDashoffset = circumference * (1 - progress);

  return (
    <div className="schedule-banner">
      <div className="top-row">
        <span>{`${dateString} | ${isWeekend ? 'Weekend' : `${props.dayType} Day`}`}</span>
      </div>
      <div className="bottom-row">
        <div className="time-circle">
          <svg className="progress-ring" width="140" height="140">
            <circle
              cx="69"
              cy="70"
              r="61"
              stroke="#004085"
              strokeWidth="7"
              fill="transparent"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
            />
          </svg>
          <span className="timer">{isWeekend ? "0/0" : `${Math.round(props.minutes)}/${Math.round(props.minutesLeft)}`}</span>
        </div>
        <div className="time-period">
          <span className="time">{timeString}</span>
          <span className="period">{isWeekend ? "No School" : props.currPeriod}</span>
        </div>
      </div>
    </div>
  );
}
