import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '../styles/Calendar.css'; // Custom styles
import { FaPlusCircle } from 'react-icons/fa';

const CalendarComponent = () => {
  const [value, setValue] = useState(new Date());
  const [events, setEvents] = useState([
    { date: '2024-11-20', type: 'Lesson', title: 'Math Class - Algebra' },
    { date: '2024-11-22', type: 'Test', title: 'Science Test - Physics' },
    { date: '2024-11-25', type: 'Live Class', title: 'Chemistry - Organic Reactions' },
  ]);

  const handleDateChange = (date) => {
    setValue(date);
  };

  const handleAddEvent = () => {
    const newEvent = prompt('Enter Event Details (e.g., 2024-11-30, Lesson, History Class)');
    if (newEvent) {
      const [date, type, title] = newEvent.split(',').map((item) => item.trim());
      setEvents([...events, { date, type, title }]);
    }
  };

  const renderEvents = (date) => {
    const dayEvents = events.filter((event) => event.date === date.toISOString().split('T')[0]);
    return dayEvents.map((event, index) => (
      <div key={index} className={`event event-${event.type.toLowerCase()}`}>
        {event.title}
      </div>
    ));
  };

  return (
    <div className="calendar-container">
      <h3>Study Calendar</h3>
      <div className="calendar-header">
        <button onClick={handleAddEvent} className="add-event-button">
          <FaPlusCircle /> Add Event
        </button>
      </div>
      <Calendar
        onChange={handleDateChange}
        value={value}
        tileContent={({ date, view }) =>
          view === 'month' && renderEvents(date)
        }
      />
      <div className="event-details">
        <h4>Events on {value.toDateString()}</h4>
        <ul>
          {events
            .filter((event) => event.date === value.toISOString().split('T')[0])
            .map((event, index) => (
              <li key={index}>
                <strong>{event.type}:</strong> {event.title}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default CalendarComponent;
