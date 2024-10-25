// CalendarView.js
import React, { useRef, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

const CalendarView = ({ payments = [] }) => {
  const calendarRef = useRef(null);

  const events = payments.map((payment) => ({
    title: `${payment.type}: ₹${payment.amount}`,
    start: payment.date,
    allDay: true,
    color: payment.status === 'Paid' ? '#28a745' : '#6c757d',
  }));

  useEffect(() => {
    const calendarApi = calendarRef.current.getApi();
    calendarApi.removeAllEvents();
    events.forEach((event) => calendarApi.addEvent(event));
  }, [payments]);

  return (
    <FullCalendar
      ref={calendarRef}
      plugins={[dayGridPlugin]}
      initialView="dayGridMonth"
    />
  );
};

export default CalendarView;
