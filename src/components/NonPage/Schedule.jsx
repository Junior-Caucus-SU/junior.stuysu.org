import React, { useState, useEffect } from 'react';
import './Schedule.css';
import Papa from 'papaparse';

export default function ScheduleBanner() {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());
  const [schedule, setSchedule] = useState({ period: '', type: '' });
  const [scheduleData, setScheduleData] = useState([]);

  useEffect(() => {
    const fetchScheduleData = async () => {
      try {
        const response = await fetch('https://docs.google.com/spreadsheets/d/e/2PACX-1vQgnBwKnNEpIx54LqizLN6mOZyPc1eASMLqWHF3fzFp-mOY4_tNBBCF9hhkmMKNQoYody_apuRHN9hu/pub?output=csv');
        const text = await response.text();
        const parsedData = Papa.parse(text, { header: true }).data;
        setScheduleData(parsedData);
      } catch (error) {
        console.error('Error fetching schedule:', error);
      }
    };

    fetchScheduleData();
  }, []);

  useEffect(() => {
    const updateSchedule = () => {
      const currentSchedule = scheduleData.find(row => {
        const startTime = new Date(`${row.Date} ${row['Start Time']}`);
        const endTime = new Date(`${row.Date} ${row['End Time']}`);
        return startTime <= currentDateTime && currentDateTime <= endTime;
      });

      if (currentSchedule) {
        setSchedule({
          period: currentSchedule.Period,
          type: currentSchedule.Type
        });
      }
    };

    updateSchedule();
    const timer = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);
    updateSchedule();

    return () => clearInterval(timer);
  }, [currentDateTime, scheduleData]);

  const timeString = currentDateTime.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
  });

  const dateString = currentDateTime.toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="schedule-banner">
      <div className="top-row">
        <span>{`${dateString} | ${schedule.type} Day`}</span>
      </div>
      <div className="bottom-row">
        <div className="time-circle">
          <span className="date">{"sd"}</span>
        </div>
        <div className="time-period">
          <span className="time">{timeString}</span>
          <span className="period">{`Period ${schedule.period}`}</span>
        </div>
      </div>
    </div>
  );
}
