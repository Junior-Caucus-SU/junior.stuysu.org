import React, { useState, useEffect, useMemo, useCallback } from 'react';
import './Schedule.css';
import Papa from 'papaparse';

const dateFormat = {
  longWK: { weekday: 'long', month: 'long', day: 'numeric' },
  shortWK: { weekday: 'short' },
  timeHMS: { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false }
};

function ScheduleDay({ daySchedule }) {
  const datAbbr = new Date(daySchedule.Date).toLocaleDateString('en-US', dateFormat.shortWK);
  return (
    <div className="day-schedule">
      <div className="date-circle">
        <span className="day-abbreviation">{datAbbr}</span>
      </div>
      <div className="schedule-type">{`Regular ${daySchedule.Type} Day`}</div>
    </div>
  );
}

function WeeklySchedule({scheduleData}) {
  const today = new Date();
  const dayOfWeek = today.getDay() === 0 ? 7 : today.getDay();
  const firstDayOfWeek = today.getDate() - dayOfWeek + 1;
  const lastDayOfWeek = firstDayOfWeek + 4;

  const curWeekSchedule = useMemo(() => {
    const startOfWeek = new Date(today.getFullYear(), today.getMonth(), firstDayOfWeek);
    const endOfWeek = new Date(today.getFullYear(), today.getMonth(), lastDayOfWeek + 1);

    return scheduleData
      .filter(row => {
        const rowDate = new Date(row.Date);
        return rowDate.getDay() !== 0 && rowDate.getDay() !== 6 && rowDate >= startOfWeek && rowDate < endOfWeek;
      })
      .sort((a, b) => new Date(a.Date) - new Date(b.Date));
  }, [scheduleData, today, firstDayOfWeek, lastDayOfWeek]);

  return (
    <div className="weekly-schedule">
      {curWeekSchedule.map((daySchedule, index) => (
        <ScheduleDay key={index} daySchedule={daySchedule} />
      ))}
    </div>
  );
}

export default function ScheduleBanner() {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());
  const [schedule, setSchedule] = useState({ period: '', type: '' });
  const [scheduleData, setScheduleData] = useState([]);

  const fetchSchedule = useCallback(async () => {
    try {
      const response = await fetch('https://docs.google.com/spreadsheets/d/e/2PACX-1vQgnBwKnNEpIx54LqizLN6mOZyPc1eASMLqWHF3fzFp-mOY4_tNBBCF9hhkmMKNQoYody_apuRHN9hu/pub?output=csv');
      const text = await response.text();
      const parsedData = Papa.parse(text, { header: true }).data;
      setScheduleData(parsedData);
    } catch (error) {
      console.error('Error fetching schedule:', error);
    }
  }, []);

  useEffect(() => {
    fetchSchedule();
  }, [fetchSchedule]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const currentSchedule = scheduleData.find(row => {
      const startTime = new Date(`${row.Date} ${row['Start Time']}`);
      const endTime = new Date(`${row.Date} ${row['End Time']}`);
      return startTime <= currentDateTime && currentDateTime <= endTime;
    });

    if (currentSchedule) {
      setSchedule(prevSchedule => ({
        ...prevSchedule,
        period: currentSchedule.Period,
        type: currentSchedule.Type
      }));
    }
  }, [currentDateTime, scheduleData]);

  const isWeekend = useMemo(() => currentDateTime.getDay() === 0 || currentDateTime.getDay() === 6, [currentDateTime]);
  const timeString = currentDateTime.toLocaleTimeString('en-US', dateFormat.timeHMS);
  const dateString = currentDateTime.toLocaleDateString('en-US', dateFormat.longWK);

  const calculateTimer = () => {
    const currentSchedule = scheduleData.find(row => {
      const startTime = new Date(`${row.Date} ${row['Start Time']}`);
      const endTime = new Date(`${row.Date} ${row['End Time']}`);
      return startTime <= currentDateTime && currentDateTime <= endTime;
    });

    if (currentSchedule) {
      const startTime = new Date(`${currentSchedule.Date} ${currentSchedule['Start Time']}`);
      const endTime = new Date(`${currentSchedule.Date} ${currentSchedule['End Time']}`);
      const totalMinutes = (endTime - startTime) / 60000; // Total period duration in minutes
      const minutesPassed = (currentDateTime - startTime) / 60000; // Minutes passed since period start
      const minutesLeft = totalMinutes - minutesPassed; // Minutes left until period end

      return { minutesPassed: Math.floor(minutesPassed), minutesLeft: Math.floor(minutesLeft) };
    }

    return { minutesPassed: 0, minutesLeft: 0 };
  };

  const timer = calculateTimer();

  const circumference = 2 * Math.PI * 50;
  const progress = timer.minutesPassed / (timer.minutesPassed + timer.minutesLeft);
  const strokeDashoffset = circumference * (1 - progress);
  
  return (
    <div className="schedule-banner">
      <div className="top-row">
        <span>{`${dateString} | ${isWeekend ? 'Weekend' : `${schedule.type} Day`}`}</span>
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
          <span className="timer">{`${timer.minutesPassed}/${timer.minutesLeft}`}</span>
        </div>
        <div className="time-period">
          <span className="time">{timeString}</span>
          <span className="period">{isWeekend ? "No School" : `Period ${schedule.period}`}</span>
        </div>
      </div>
      <WeeklySchedule scheduleData={scheduleData} />
    </div>
  );
}
