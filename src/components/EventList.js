import { formatDate, monthDate } from '@/utils/helper';

export default function EventList({ events, setEvents, setNewEvent, setSelectedEvent, setIsCreateEventModalOpen, setIsViewEventModalOpen }) {
    const onClickEdit = (e, event) => {
        const startDate = event.start.split(" ");
        const endDate = event.end.split(" ");

        setNewEvent((state) => {
            return {
                id: event.id,
                title: event.title,
                service: event.service,
                startDate: startDate[0],
                startTime: startDate[1] ?? "",
                endDate: endDate[0],
                endTime: endDate[1] ?? "",
                attachments: event.attachments
            };
        });
        setIsCreateEventModalOpen(true);
    };

    const onClickDelete = (e, event) => {
        const isConfirmed = confirm("Are you sure you want to delete?");
        if (isConfirmed) {
            let newEvents = events.filter(data => data.id !== event.id);
            setEvents((state) => {
                return [
                    ...newEvents
                ];
            });
        }
    };

    const onClickView = (e, event) => {

        setSelectedEvent(event);
        setIsViewEventModalOpen(true);
    };

    return (
        <div className='bg-white mt-3'>
            <table className="w-full text-sm text-left">
                <thead className="text-xs uppercase bg-gray-50">
                    <tr>
                        <th scope="col" className="px-6 py-5">
                            Event
                        </th>
                        <th scope="col" className="px-6 py-5">
                            Service
                        </th>
                        <th scope="col" className="px-6 py-5">
                            Schedule
                        </th>
                        
                        <th scope="col" className="px-6 py-5">
                            
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {events.map((event, index) => (
                        <tr key={index}>
                            <th scope="row" className="px-6 py-4 font-medium">
                                <h4 className="mb-2">{event.title}</h4>
                                <p className="font-light text-xs text-slate-600">{formatDate(event.start)}</p>
                            </th>
                            <td className="px-6 py-4">
                                {event.service}
                            </td>
                            
                            <td className="px-6 py-4">
                                {formatDate(event.start)} - {formatDate(event.end)}
                            </td>
                            <td className="px-6 py-4">
                                <button
                                    type='button'
                                    className="group border-slate-100 border hover:bg-primary/30 hover:text-primary hover:border-primary text-gray-800 font-bold px-2 py-2"
                                    onClick={(e) => onClickView(e, event)}
                                >
                                    <svg className='fill-slate-900 group-hover:fill-primary' width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 442.04 442.04"><title>View</title><g><g><path d="M221.02,341.304c-49.708,0-103.206-19.44-154.71-56.22C27.808,257.59,4.044,230.351,3.051,229.203 c-4.068-4.697-4.068-11.669,0-16.367c0.993-1.146,24.756-28.387,63.259-55.881c51.505-36.777,105.003-56.219,154.71-56.219 c49.708,0,103.207,19.441,154.71,56.219c38.502,27.494,62.266,54.734,63.259,55.881c4.068,4.697,4.068,11.669,0,16.367 c-0.993,1.146-24.756,28.387-63.259,55.881C324.227,321.863,270.729,341.304,221.02,341.304z M29.638,221.021 c9.61,9.799,27.747,27.03,51.694,44.071c32.83,23.361,83.714,51.212,139.688,51.212s106.859-27.851,139.688-51.212 c23.944-17.038,42.082-34.271,51.694-44.071c-9.609-9.799-27.747-27.03-51.694-44.071 c-32.829-23.362-83.714-51.212-139.688-51.212s-106.858,27.85-139.688,51.212C57.388,193.988,39.25,211.219,29.638,221.021z"/></g><g><path d="M221.02,298.521c-42.734,0-77.5-34.767-77.5-77.5c0-42.733,34.766-77.5,77.5-77.5c18.794,0,36.924,6.814,51.048,19.188 c5.193,4.549,5.715,12.446,1.166,17.639c-4.549,5.193-12.447,5.714-17.639,1.166c-9.564-8.379-21.844-12.993-34.576-12.993 c-28.949,0-52.5,23.552-52.5,52.5s23.551,52.5,52.5,52.5c28.95,0,52.5-23.552,52.5-52.5c0-6.903,5.597-12.5,12.5-12.5 s12.5,5.597,12.5,12.5C298.521,263.754,263.754,298.521,221.02,298.521z"/></g><g><path d="M221.02,246.021c-13.785,0-25-11.215-25-25s11.215-25,25-25c13.786 0,25,11.215,25,25S234.806,246.021,221.02,246.021z"/></g></g></svg>
                                </button>
                                <button
                                    type='button'
                                    className="group border-slate-100 border hover:bg-primary/30 hover:text-primary hover:border-primary text-gray-800 font-bold px-2 py-2"
                                    onClick={(e) => onClickEdit(e, event)}
                                >
                                    <svg className='stroke-slate-600 group-hover:stroke-primary' width="15" height="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <title>Edit</title>
                                        <g id="Complete">
                                            <g id="edit"><g>
                                                <path d="M20,16v4a2,2,0,0,1-2,2H4a2,2,0,0,1-2-2V6A2,2,0,0,1,4,4H8" fill="none" strokeWidth="2" />
                                                <polygon fill="none" points="12.5 15.8 22 6.2 17.8 2 8.3 11.5 8 16 12.5 15.8" strokeWidth="2" />
                                            </g></g>
                                        </g>
                                    </svg>
                                </button>
                                <button
                                    type='button'
                                    className="group border-slate-100 border hover:bg-primary/30 hover:text-primary hover:border-primary text-gray-800 font-bold px-2 py-2"
                                    onClick={(e) => onClickDelete(e, event)}
                                >
                                    <svg className='stroke-slate-600 group-hover:stroke-primary' width="15" height="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <title>Delete</title>
                                        <g id="Interface / Trash_Full">
                                            <path id="Vector" d="M14 10V17M10 10V17M6 6V17.8C6 18.9201 6 19.4798 6.21799 19.9076C6.40973 20.2839 6.71547 20.5905 7.0918 20.7822C7.5192 21 8.07899 21 9.19691 21H14.8031C15.921 21 16.48 21 16.9074 20.7822C17.2837 20.5905 17.5905 20.2839 17.7822 19.9076C18 19.4802 18 18.921 18 17.8031V6M6 6H8M6 6H4M8 6H16M8 6C8 5.06812 8 4.60241 8.15224 4.23486C8.35523 3.74481 8.74432 3.35523 9.23438 3.15224C9.60192 3 10.0681 3 11 3H13C13.9319 3 14.3978 3 14.7654 3.15224C15.2554 3.35523 15.6447 3.74481 15.8477 4.23486C15.9999 4.6024 16 5.06812 16 6M16 6H18M18 6H20" strokeWidth="2" />
                                        </g>
                                    </svg>
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};