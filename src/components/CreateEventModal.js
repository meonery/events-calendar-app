import Image from 'next/image';
import { Fragment, useState } from 'react';

const initialError = {
    title: null,
    startDate: null,
    service: null,
};

const getToday = () => {
    let today = new Date();

    let month = today.getMonth() + 1;
    let day = today.getDate();
    let year = today.getFullYear();

    return year + '-' + ("0" + month).slice(-2) + '-' + ("0" + day).slice(-2);
};

export default function CreateEventModal({
    isCreateEventModalOpen,
    setIsCreateEventModalOpen,
    newEvent,
    setNewEvent,
    events,
    setEvents,
    services,
    setSuccessMessage
}) {
    const [error, setError] = useState(initialError);

    const onSubmit = (event) => {
        event.preventDefault();
        setError(initialError);

        let errors = {};
        if (newEvent.title === "") errors.title = "Title is required";
        if (newEvent.startDate === "") errors.startDate = "Start Date is required";
        if (newEvent.service === "") errors.service = "Service is required";

        if (JSON.stringify(errors) !== "{}") {
            setError(errors);

            return false;
        }

        const start = newEvent.startDate ? newEvent.startDate + (newEvent.startTime ? " " + newEvent.startTime : "") : "";
        const end = newEvent.endDate ? newEvent.endDate + (newEvent.endTime ? " " + newEvent.endTime : "") : "";

        // If update action, remove from array to update FullCalendar, then add again below.
        if (newEvent.id) {
            let eventsEdit = [...events];
            eventsEdit.forEach(data => {
                if(data.id === newEvent.id) {
                    data.title = newEvent.title;
                    data.service = newEvent.service;
                    data.start = start;
                    data.end = end;
                    data.attachments = newEvent.attachments;
                }
            });
            
            setEvents((state) => {
                return [
                    ...eventsEdit
                ];
            });
            setSuccessMessage("Event updated successfully");
        } else {
            setEvents((state) => {
                return [
                    ...state,
                    {
                        id: state.length + 1,
                        title: newEvent.title,
                        service: newEvent.service,
                        start: start,
                        end: end,
                        attachments: newEvent.attachments
                    }
                ]
            });
            setSuccessMessage("Event created successfully");
        }
  
        setIsCreateEventModalOpen(false);
    };

    const onChangeFieldValue = (event, field) => {
        setNewEvent((state) => {
            return {
                ...state,
                [field]: event.target.value
            }
        });
    };

    const onClickDelete = (event) => {
        const isConfirmed = confirm("Are you sure you want to delete?");
        if (isConfirmed) {
            setEvents((state) => {
                return state.filter(data => data.id !== newEvent.id);
            });
        }
        setIsCreateEventModalOpen(false);
    };

    const onChangeFileUpload = (event) => {
        const files = [].slice.call(event.target.files);
        setNewEvent((state) => {
            return {
                ...state,
                attachments: files
            }
        });
    };

    const onClickRemoveAttachment = (event, index) => {
        let attachments = newEvent.attachments.filter((data, i) => i !== index);
        setNewEvent((state) => {
            return {
                ...state,
                attachments
            }
        });
    };

    return (
        <>
            {isCreateEventModalOpen ? (
                <>
                    <div className="w-full justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                        <div className="relative w-2/5 my-6 max-w-full">
                            <div className="border-0 rounded-xl shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                <div className="flex items-center justify-between px-5 py-3 rounded-t">
                                    <h3 className="text-lg font-bold text-slate-900">
                                        {newEvent.id ? 'Edit Event' : 'Add new event'}
                                    </h3>
                                    <button className="text-sm font-regular leading-6 text-slate-600 p-2 rounded-lg hover:bg-slate-50"
                                        type="button"
                                        onClick={(event) => setIsCreateEventModalOpen(false)}
                                    >
                                        <svg width="25" height="25" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M16 8L8 16M8 8L16 16" stroke="#000000" strokeWidth="2" strokeLinecap="round" />
                                        </svg>
                                    </button>
                                </div>
                                <hr className='mx-4' />
                                <div className="relative p-6 h-[30rem] overflow-y-auto overflow-scroll">
                                    <form onSubmit={onSubmit} id="form-create-event">
                                        <div className="col-span-full">
                                            <div className='mb-3'>
                                                <input
                                                    type="text"
                                                    id="event_name"
                                                    name="event_name"
                                                    className="block w-full rounded-md border-0 px-3 py-2 bg-gray-50 text-gray-900 ring-gray-100 placeholder:text-gray-400 focus:outline-orange-300 focus:border-orange-300 focus:bg-white focus:ring-0 sm:text-sm mb-2"
                                                    placeholder='Add Title'
                                                    value={newEvent.title}
                                                    onChange={(event) => onChangeFieldValue(event, "title")}
                                                />
                                                {error.title && <span className="text-red-500">{error.title}</span>}
                                            </div>

                                            <div className='my-3'>

                                                <div className="grid grid-cols-5 gap-5 items-center my-3 mt-0">
                                                    <div>
                                                        <label htmlFor='event_date_start' className='text-sm font-medium text-gray-700'>Start</label>
                                                    </div>
                                                    <div className='col-span-2'>
                                                        <input
                                                            type="date"
                                                            id="event_date"
                                                            name="event_date"
                                                            className="block w-full rounded-md border-0 px-1.5 py-2 bg-gray-50 text-gray-900 ring-gray-100 placeholder:text-gray-400 focus:outline-orange-300 focus:border-orange-300 focus:bg-white focus:ring-0 sm:text-sm placeholder-shown:text-slate-100"
                                                            min={getToday()}
                                                            value={newEvent.startDate}
                                                            onChange={(event) => onChangeFieldValue(event, "startDate")}
                                                        />
                                                        {error.startDate && <span className="text-red-500">{error.startDate}</span>}
                                                    </div>
                                                    <div className='col-span-2'>

                                                        <input
                                                            type="time"
                                                            id="event_time"
                                                            name="event_time"
                                                            className="block w-full rounded-md border-0 px-1.5 py-2 bg-gray-50 text-gray-900 ring-gray-100 placeholder:text-gray-400 focus:outline-orange-300 focus:border-orange-300 focus:bg-white focus:ring-0 sm:text-sm"
                                                            
                                                            value={newEvent.startTime}
                                                            onChange={(event) => onChangeFieldValue(event, "startTime")}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='my-3'>

                                                <div className="grid grid-cols-5 gap-5 items-center my-3 mt-0">
                                                    <div>
                                                        <label htmlFor='event_date_end' className='text-sm font-medium text-gray-700 mt-3'>End </label>
                                                    </div>
                                                    <div className='col-span-2'>
                                                        <input
                                                            type="date"
                                                            id="event_date"
                                                            name="event_date"
                                                            className="block w-full rounded-md border-0 px-1.5 py-2 bg-gray-50 text-gray-900 ring-gray-100 placeholder:text-gray-400 focus:outline-orange-300 focus:border-orange-300 focus:bg-white focus:ring-0 sm:text-sm"
                                                            min={getToday()}
                                                            value={newEvent.endDate}
                                                            onChange={(event) => onChangeFieldValue(event, "endDate")}
                                                        />

                                                    </div>
                                                    <div className='col-span-2'>
                                                        <input
                                                            type="time"
                                                            id="event_time"
                                                            name="event_time"
                                                            className="block w-full rounded-md border-0 px-1.5 py-2 bg-gray-50 text-gray-900 ring-gray-100 placeholder:text-gray-400 focus:outline-orange-300 focus:border-orange-300 focus:bg-white focus:ring-0 sm:text-sm"
                                                            value={newEvent.endTime}
                                                            onChange={(event) => onChangeFieldValue(event, "endTime")}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <hr className='border-dashed my-5' />
                                            <div className="sm:col-span-3">
                                                <label htmlFor="service" className="block text-sm font-medium leading-6 text-gray-900">
                                                    Choose a service
                                                </label>
                                                <div className="mt-2">
                                                    <select
                                                        id="service"
                                                        className="block w-full rounded-md border-0 px-1.5 py-2 bg-gray-50 text-gray-900 ring-gray-100 placeholder:text-gray-400 focus:outline-orange-300 focus:border-orange-300 focus:bg-white focus:ring-0 sm:text-sm"
                                                        value={newEvent.service}
                                                        onChange={(event) => onChangeFieldValue(event, "service")}
                                                    >
                                                        <option value="">--</option>
                                                        {services.map((service, index) => (
                                                            <option key={index} value={service.name}>{service.name}</option>
                                                        ))}
                                                    </select>
                                                    {error.service && <span className="text-red-500">{error.service}</span>}
                                                </div>
                                            </div>
                                            <hr className='border-dashed my-5' />
                                            <div className=''>
                                                <p className="block text-sm font-medium leading-6 text-gray-900">
                                                    Additional Files
                                                </p>
                                                <div className="mt-2">

                                                    <div className="">
                                                        {/* Upload or drop files */}
                                                        <div className="mt-4 w-full flex justify-center text-sm text-center leading-6 text-gray-600">
                                                            <label
                                                                htmlFor="file_upload"
                                                                className="relative w-full cursor-pointer bg-white focus-within:outline-none focus-within:ring-2 focus-within:ring-orange-400 focus-within:ring-offset-2 hover:text-primary-500 text-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10"
                                                            >
                                                                <div>
                                                                    <p>
                                                                        <span className='font-semibold text-primary'>Upload a file</span>
                                                                        
                                                                    </p>
                                                                    <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF, MP4, PDF, DOC, DOCX</p>
                                                                </div>
                                                                <input id="file_upload" name="file_upload" type="file" multiple hidden accept='image/*, video/*, .pdf, .doc, .docx' value={''} onChange={onChangeFileUpload} />
                                                            </label>

                                                        </div>
                                                        {/* end of dropzone */}

                                                        {/*File Preview zone*/}
                                                        <div className='mt-8'>
                                                            <ul className="flex flex-1 flex-wrap -m-1">
                                                                {newEvent.attachments.length === 0 && (
                                                                    <li className="h-full w-full text-center flex flex-col items-center justify-center">
                                                                        <svg className='fill-gray-300' width="30" height="30" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                                                                            <path d="M8,16c-4.4,0-8,3.6-8,8s3.6,8,8,8s8-3.6,8-8S12.4,16,8,16z M11,25H5c-0.6,0-1-0.4-1-1s0.4-1,1-1h6c0.6,0,1,0.4,1,1
                                                                            S11.6,25,11,25z"/>
                                                                            <path d="M29,8h-8.9l-2.3-3.5C17.7,4.2,17.3,4,17,4H7C5.3,4,4,5.3,4,7v7.8C5.2,14.3,6.6,14,8,14c5.5,0,10,4.5,10,10
                                                                        c0,1.4-0.3,2.8-0.8,4H29c1.7,0,3-1.3,3-3V11C32,9.3,30.7,8,29,8z M30,23.6L21.4,10H29c0.6,0,1,0.4,1,1V23.6z"/>
                                                                        </svg>
                                                                        <span className="text-small text-gray-300">No files selected</span>
                                                                    </li>
                                                                )}
                                                            </ul>
                                                            <ul className='flex flex-wrap'>
                                                                {newEvent.attachments.map((attachment, index) => (
                                                                    <Fragment key={index}>
                                                                        {attachment.type.includes("video") && (
                                                                            <li className="block p-1 w-1/5 sm:w-1/3 md:w-1/4 lg:w-32 xl:w-1/8 h-24">
                                                                                <article tabIndex="0" className="group hasImage w-full h-full rounded-md focus:outline-none focus:shadow-outline bg-gray-100 cursor-pointer relative text-transparent hover:text-white shadow-sm">
                                                                                    <video
                                                                                        className="img-preview w-full h-full sticky object-cover rounded-md bg-fixed"
                                                                                        autoPlay="autoplay"
                                                                                        muted
                                                                                        loop
                                                                                    >
                                                                                        <source src={URL.createObjectURL(attachment)} type={attachment.type} />
                                                                                    </video>

                                                                                    <section className="flex flex-col rounded-md text-xs break-words w-full h-full z-20 absolute top-0 py-2 px-3 hover:opacity-100 hover:bg-slate-800/40">
                                                                                        <h1 className="flex-1"></h1>
                                                                                        <div className="flex">
                                                                                            <p className="p-1 size text-xs">{Math.floor(attachment.size / 1000) + 'kb'}</p>
                                                                                            <button
                                                                                                type='button'
                                                                                                className="delete ml-auto focus:outline-none hover:bg-slate-700 p-1 rounded-md"
                                                                                                onClick={(event) => onClickRemoveAttachment(event, index)}
                                                                                            >
                                                                                                <svg className="pointer-events-none stroke-current fill-none w-4 h-4 ml-auto" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                                                                                    <path d="M14 10V17M10 10V17M6 6V17.8C6 18.9201 6 19.4798 6.21799 19.9076C6.40973 20.2839 6.71547 20.5905 7.0918 20.7822C7.5192 21 8.07899 21 9.19691 21H14.8031C15.921 21 16.48 21 16.9074 20.7822C17.2837 20.5905 17.5905 20.2839 17.7822 19.9076C18 19.4802 18 18.921 18 17.8031V6M6 6H8M6 6H4M8 6H16M8 6C8 5.06812 8 4.60241 8.15224 4.23486C8.35523 3.74481 8.74432 3.35523 9.23438 3.15224C9.60192 3 10.0681 3 11 3H13C13.9319 3 14.3978 3 14.7654 3.15224C15.2554 3.35523 15.6447 3.74481 15.8477 4.23486C15.9999 4.6024 16 5.06812 16 6M16 6H18M18 6H20" />
                                                                                                </svg>
                                                                                            </button>
                                                                                        </div>
                                                                                    </section>
                                                                                </article>
                                                                            </li>
                                                                        )}
                                                                        {attachment.type.includes("image") && (
                                                                            <li key={index} className="block p-1 w-1/5 sm:w-1/3 md:w-1/4 lg:w-32 xl:w-1/8 h-24">
                                                                                <article tabIndex="0" className="group hasImage w-full h-full rounded-md focus:outline-none focus:shadow-outline bg-gray-100 cursor-pointer relative text-transparent hover:text-white shadow-sm">
                                                                                    <Image src={URL.createObjectURL(attachment)} fill alt="upload preview" className="img-preview w-full h-full sticky object-cover rounded-md bg-fixed" />

                                                                                    <section className="flex flex-col rounded-md text-xs break-words w-full h-full z-20 absolute top-0 py-2 px-3 hover:opacity-100 hover:bg-slate-800/40">
                                                                                        <h1 className="flex-1"></h1>
                                                                                        <div className="flex">

                                                                                            <p className="p-1 size text-xs">{Math.floor(attachment.size / 1000) + 'kb'}</p>
                                                                                            <button
                                                                                                type='button'
                                                                                                className="delete ml-auto focus:outline-none hover:bg-slate-700 p-1 rounded-md"
                                                                                                onClick={(event) => onClickRemoveAttachment(event, index)}
                                                                                            >

                                                                                                <svg className="pointer-events-none stroke-current fill-none w-4 h-4 ml-auto" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                                                                                    <path d="M14 10V17M10 10V17M6 6V17.8C6 18.9201 6 19.4798 6.21799 19.9076C6.40973 20.2839 6.71547 20.5905 7.0918 20.7822C7.5192 21 8.07899 21 9.19691 21H14.8031C15.921 21 16.48 21 16.9074 20.7822C17.2837 20.5905 17.5905 20.2839 17.7822 19.9076C18 19.4802 18 18.921 18 17.8031V6M6 6H8M6 6H4M8 6H16M8 6C8 5.06812 8 4.60241 8.15224 4.23486C8.35523 3.74481 8.74432 3.35523 9.23438 3.15224C9.60192 3 10.0681 3 11 3H13C13.9319 3 14.3978 3 14.7654 3.15224C15.2554 3.35523 15.6447 3.74481 15.8477 4.23486C15.9999 4.6024 16 5.06812 16 6M16 6H18M18 6H20" />
                                                                                                </svg>
                                                                                            </button>
                                                                                        </div>
                                                                                    </section>
                                                                                </article>
                                                                            </li>
                                                                        )}
                                                                        {attachment.type.includes("application") && (
                                                                            <li className="block p-1 w-1/5 sm:w-1/3 md:w-1/4 lg:w-32 xl:w-1/8 h-24">
                                                                                <article tabIndex="0" className="group hasImage w-full h-full rounded-md focus:outline-none focus:shadow-outline bg-gray-100 cursor-pointer relative text-transparent hover:text-white shadow-sm">
                                                                                    <p className='text-xs text-gray-700 p-2'>{attachment.name}</p>
                                                                                    <section className="flex flex-col rounded-md text-xs break-words w-full h-full z-20 absolute top-0 py-2 px-3 hover:opacity-100 hover:bg-slate-800/40">
                                                                                        <h1 className="flex-1"></h1>
                                                                                        <div className="flex">
                                                                                            <p className="p-1 size text-xs">{Math.floor(attachment.size / 1000) + 'kb'}</p>
                                                                                            <button
                                                                                                type='button'
                                                                                                className="delete ml-auto focus:outline-none hover:bg-slate-700 p-1 rounded-md"
                                                                                                onClick={(event) => onClickRemoveAttachment(event, index)}
                                                                                            >
                                                                                                <svg className="pointer-events-none stroke-current fill-none w-4 h-4 ml-auto" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                                                                                    <path d="M14 10V17M10 10V17M6 6V17.8C6 18.9201 6 19.4798 6.21799 19.9076C6.40973 20.2839 6.71547 20.5905 7.0918 20.7822C7.5192 21 8.07899 21 9.19691 21H14.8031C15.921 21 16.48 21 16.9074 20.7822C17.2837 20.5905 17.5905 20.2839 17.7822 19.9076C18 19.4802 18 18.921 18 17.8031V6M6 6H8M6 6H4M8 6H16M8 6C8 5.06812 8 4.60241 8.15224 4.23486C8.35523 3.74481 8.74432 3.35523 9.23438 3.15224C9.60192 3 10.0681 3 11 3H13C13.9319 3 14.3978 3 14.7654 3.15224C15.2554 3.35523 15.6447 3.74481 15.8477 4.23486C15.9999 4.6024 16 5.06812 16 6M16 6H18M18 6H20" />
                                                                                                </svg>
                                                                                            </button>
                                                                                        </div>
                                                                                    </section>
                                                                                </article>
                                                                            </li>
                                                                        )}
                                                                    </Fragment>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                        {/* end of preview */}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>

                                <div className="flex items-center justify-end gap-x-6 p-6">

                                    {newEvent.id && (
                                        <button
                                            type="button"
                                            className="rounded-md bg-slate-100 px-3 py-2 text-sm font-regular text-black shadow-sm hover:bg-red-200 hover:text-red-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                                            onClick={onClickDelete}
                                        >
                                            Delete
                                        </button>
                                    )}
                                    <button
                                        type="submit"
                                        className="rounded-md bg-primary px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
                                        form="form-create-event"
                                    >
                                        {newEvent.id ? 'Update' : 'Create'}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
        </>
    )
}