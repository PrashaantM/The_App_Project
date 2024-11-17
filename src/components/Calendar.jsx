import React, { useState } from 'react';
import Calendar from 'react-calendar'; // Import react-calendar
import 'react-calendar/dist/Calendar.css'; // Import calendar styles
import '../styles/Calendar.css';


// Dummy data for events
const events = [
  { date: new Date(2024, 10, 20), title: 'Math Exam' },
  { date: new Date(2024, 10, 25), title: 'Science Exam' },
  { date: new Date(2024, 10, 30), title: 'History Test' },
  { date: new Date(2024, 11, 5), title: 'Live Class - Physics' },
  { date: new Date(2024, 11, 10), title: 'Live Class - Chemistry' },
];

const CalendarPage = () => {
  const [date, setDate] = useState(new Date());
  const [examDate, setExamDate] = useState('');
  const [examSubject, setExamSubject] = useState('');
  const [reminders, setReminders] = useState(events); // Initialize with existing dummy events

  // Function to filter events for the selected date
  const getEventsForDate = (date) => {
    return reminders.filter(event => event.date.toDateString() === date.toDateString());
  };

  // Function to handle adding reminders
  const handleAddReminder = () => {
    const newReminder = { date: new Date(examDate), subject: examSubject };
    setReminders([...reminders, newReminder]);
    setExamDate(''); // Clear the input fields after adding
    setExamSubject('');
  };

  return (
    <div>
      <h3>Upcoming Deadlines & Live Classes</h3>

      <div className="calendar">
        <Calendar
          onChange={setDate}
          value={date}
        />

        <div className="event-details">
          <h4>Events for {date.toDateString()}:</h4>
          <ul>
            {getEventsForDate(date).length === 0 ? (
              <li>No events for today</li>
            ) : (
              getEventsForDate(date).map((event, index) => (
                <li key={index}>{event.subject} - {event.date.toDateString()}</li>
              ))
            )}
          </ul>
        </div>
      </div>

      <div className="add-reminder">
        <h3>Add a Reminder</h3>
        <input
          type="date"
          value={examDate}
          onChange={(e) => setExamDate(e.target.value)}
        />
        <input
          type="text"
          placeholder="Subject"
          value={examSubject}
          onChange={(e) => setExamSubject(e.target.value)}
        />
        <button onClick={handleAddReminder}>Add Reminder</button>
      </div>

      <div className="reminders">
        <h3>Your Reminders</h3>
        <ul>
          {reminders.map((reminder, index) => (
            <li key={index}>
              {reminder.subject} - {reminder.date.toDateString()}
            </li>
          ))}
        </ul>
      </div>

      <div className="ai-suggestions">
        <h3>AI-Powered Suggestions</h3>
        <p>AI suggests focusing more on <strong>Calculus</strong> for Math and <strong>Chemical Reactions</strong> for Chemistry.</p>
      </div>
    </div>
  );
};

export default CalendarPage;
