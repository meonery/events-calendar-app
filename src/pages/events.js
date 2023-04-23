import Calendar from '@/components/Calendar'
import InnerNav from '@/components/InnerNav';
import CreateEventModal from '@/components/CreateEventModal';

import { useState } from 'react';
import { useRouter } from 'next/router';
import { newRawEvent } from '@/data/events';
import EventList from '@/components/EventList';
import ViewEventModal from '@/components/ViewEventModal';
import PageTitle from '@/components/common/PageTitle';
import SuccessAlert from '@/components/common/SuccessAlert';

export default function Events({ services, events, setEvents }) {
    const router = useRouter();
    
    const [newEvent, setNewEvent] = useState(newRawEvent);
    const [isCreateEventModalOpen, setIsCreateEventModalOpen] = useState(false);
    const [successMessage, setSuccessMessage] = useState(null);

    const [isViewEventModalOpen, setIsViewEventModalOpen] = useState(false);
    const [selectedEvent, setSelectedEvent] = useState(null);

    const onClickCreateEvent = (event) => {
        setNewEvent(newRawEvent);
        setIsCreateEventModalOpen(true);
    };

    return (
        <div>
            <PageTitle />
            <SuccessAlert
                successMessage={successMessage}
                setSuccessMessage={setSuccessMessage}
            />
            <div className='flex flex-col w-full items-center max-w-8xl justify-center p-20 pl-48 pr-36'>
                <div className='w-full items-center'>
                    <div className=''>
                        <h1 className='font-bold text-4xl mb-8'>Welcome, Jane</h1>
                        <div className='flex justify-between mb-6'>
                            <InnerNav/>
                            <button className="mt-3 flex w-full justify-center items-center rounded px-3 py-2 text-xs font-medium text-white bg-primary shadow-sm hover:bg-orange-300 sm:mt-0 sm:w-auto" type="button"
                                onClick={onClickCreateEvent}
                            >
                                <svg height="10px" width="10px" id="Layer_1" className='fill-white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 455 455">
                                    <polygon points="455,212.5 242.5,212.5 242.5,0 212.5,0 212.5,212.5 0,212.5 0,242.5 212.5,242.5 212.5,455 242.5,455 242.5,242.5 455,242.5 " />
                                </svg>
                                <span className='ml-2'>Create event</span>
                            </button>
                        </div>
                    </div>
                    <div>
                        
                        {router.query.view === "calendar" && (
                            <div className='max-w-full w-full p-2 bg-white border-gray-200 rounded-xl mt-3'>
                                <div className='max-w-full w-full p-6 bg-white shadow-slate-300 rounded-2xl'>
                                    <Calendar
                                        events={events}
                                        setNewEvent={setNewEvent}
                                        setIsCreateEventModalOpen={setIsCreateEventModalOpen}
                                        setIsViewEventModalOpen={setIsViewEventModalOpen}
                                        setSelectedEvent={setSelectedEvent}
                                    />
                                </div>
                            </div>
                        )}
                        
                        {router.query.view === "events" && (
                            <EventList
                                events={events}
                                setEvents={setEvents}
                                setNewEvent={setNewEvent}
                                setIsCreateEventModalOpen={setIsCreateEventModalOpen}
                                setIsViewEventModalOpen={setIsViewEventModalOpen}
                                setSelectedEvent={setSelectedEvent}
                            />
                        )}
                    </div>

                </div>
                <CreateEventModal
                    isCreateEventModalOpen={isCreateEventModalOpen}
                    setIsCreateEventModalOpen={setIsCreateEventModalOpen}
                    newEvent={newEvent}
                    setNewEvent={setNewEvent}
                    events={events}
                    setEvents={setEvents}
                    services={services}
                    setSuccessMessage={setSuccessMessage}
                />
                <ViewEventModal
                    isViewEventModalOpen={isViewEventModalOpen}
                    setIsViewEventModalOpen={setIsViewEventModalOpen}
                    selectedEvent={selectedEvent}
                />
            </div>
        </div>
    )
}