import React from 'react';
import { Calendar, momentLocalizer, Views } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import '../custom.css';
import CustomToolbar from './CustomToolbar'; // Import the custom toolbar

const localizer = momentLocalizer(moment);

const events = [
  {
    title: 'Event 1',
    start: new Date(2024, 4, 10, 10, 0),
    end: new Date(2024, 4, 10, 12, 0),
    organizer: 'Organizer A',
  },
  {
    title: 'Event 2',
    start: new Date(2024, 4, 11, 14, 0),
    end: new Date(2024, 4, 11, 15, 0),
    organizer: 'Organizer B',
  },
  {
    title: 'Event 3',
    start: new Date(2024, 4, 12, 9, 0),
    end: new Date(2024, 4, 12, 10, 0),
    organizer: 'Organizer A',
  },
  // more events...
];

const eventStyleGetter = (event) => {
  let backgroundColor = '#3174ad'; // default color
  if (event.organizer === 'Organizer A') {
    backgroundColor = '#f56c6c';
  } else if (event.organizer === 'Organizer B') {
    backgroundColor = '#67c23a';
  }
  const style = {
    backgroundColor,
    borderRadius: '5px',
    opacity: 0.8,
    color: 'white',
    border: '0px',
    display: 'block',
  };
  return {
    style,
  };
};

const MyCalendar = () => (
  <div style={{ height: '80vh' }}>
    <Calendar
      localizer={localizer}
      events={events}
      startAccessor="start"
      endAccessor="end"
      defaultView={Views.WEEK}
      views={{ week: true }} // Only show week view
      style={{ height: 500 }}
      eventPropGetter={eventStyleGetter}
      components={{ toolbar: CustomToolbar }} // Use custom toolbar
      showMultiDayTimes={false} // Remove hour list
    />
  </div>
);

export default MyCalendar;
