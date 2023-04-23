import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import { newRawEvent } from '@/data/events'

const twoDigit = (time) => {
    return ("0" + time).slice(-2);
};

export default function Calendar({ events, setNewEvent, setIsCreateEventModalOpen, setIsViewEventModalOpen, setSelectedEvent }) {

    const onDateClick = (info) => {
        setNewEvent(newRawEvent);
        let startDate = info.dateStr;
        let startTime = "";

        if (!info.allDay) {
            startDate = info.date.getFullYear() + "-" + twoDigit(info.date.getMonth()) + "-" + twoDigit(info.date.getDate())
            startTime = twoDigit(info.date.getHours()) + ":" + twoDigit(info.date.getMinutes()) + ":" + twoDigit(info.date.getSeconds());
        }

        setNewEvent((state) => {
            return {
                ...state,
                startDate,
                startTime
            };
        });
        setIsCreateEventModalOpen(true);
    };

    const onEventClick = (info) => {
        const selectedEvent = events.find(event => event.title === info.event.title);
        
        setSelectedEvent(selectedEvent);
        setIsViewEventModalOpen(true);
    };

    return (
        <FullCalendar
            plugins={[dayGridPlugin, interactionPlugin, timeGridPlugin]}
            headerToolbar={{
                left: 'prev,next today',
                center: 'title',
                right: 'dayGridMonth,timeGridWeek'
            }}
            initialView='dayGridMonth'
            nowIndicator={true}
            editable={true}
            selectable={true}
            selectMirror={true}
            events={events}
            dateClick={onDateClick}
            eventClick={onEventClick}
        />
    );
};