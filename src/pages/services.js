import { useEffect, useState } from 'react';
import { rawNewService } from '@/data/services';
import PageTitle from '@/components/common/PageTitle';

const initialError = {
    name: null
};

export default function Services({ services, setServices }) {
    const [tempServices, setTempServices] = useState(services);
    const [newService, setNewService] = useState(rawNewService);
    const [error, setError] = useState(initialError);

    useEffect(() => {
        let newServices = services.map(service => {
            return {
                ...service,
                isEditActive: false
            }
        })
        setTempServices(newServices);
    }, [services]);

    const onChangeTitle = (event) => {
        setNewService((state) => {
            return {
                ...state,
                name: event.target.value
            }
        });
    };

    const onSubmitNewService = (event) => {
        event.preventDefault();
        setError(initialError);

        if (newService.name === "") {
            setError({
                name: "Title is required"
            });

            return false;
        }

        const exist = services.find(data => data.name === newService.name);
        if (exist) {
            setError({
                name: "Title already exists"
            });

            return false;
        }

        setServices((state) => {
            return [
                ...state,
                {
                    id: state.length + 1,
                    name: newService.name,
                    isPermanent: newService.isPermanent
                }
            ];
        });

        // Clear input
        setNewService((state) => {
            return {
                ...state,
                name: ""
            };
        });
    };

    const onSubmitServices = (event) => {
        event.preventDefault();

        if (error.name) {
            return false;
        }

        setServices(tempServices);
    };

    const onChangeServiceName = (event, service) => {
        setError(initialError);

        const exist = tempServices.find(tempService => tempService.name === event.target.value);
        if (exist) {
            setError({
                name: "Title already exists"
            });
        }

        tempServices.forEach(data => {
            if (data.id === service.id) {
                data.name = event.target.value;
            }
        });
        setTempServices((state) => {
            return [
                ...tempServices
            ]
        });
    };

    const onClickEditService = (event, service) => {
        tempServices.forEach(data => {
            if (data.id === service.id) {
                data.isEditActive = true;
            }
        });
        setTempServices((state) => {
            return [
                ...tempServices
            ]
        });
    };

    const onClickCancelEdit = (event, service) => {
        const liveService = services.find(data => data.id === service.id);
        tempServices.forEach(data => {
            if (data.id === service.id) {
                data.isEditActive = false;
                data.name = liveService.name;
            }
        });
        setTempServices((state) => {
            return [
                ...tempServices
            ]
        });
    };

    const onClickRemoveService = (event, service) => {
        const isConfirmed = confirm("Are you sure you want to delete?");
        if (isConfirmed) {
            services = services.filter(data => data.id !== service.id);
            setServices((state) => {
                return [
                    ...services
                ];
            });
        }
    };

    return (
        <>
            <PageTitle title="Services" />
            <div className="mx-auto max-w-4xl flex justify-center p-11">
                <div className='max-w-full w-full bg-white border-gray-200 rounded-xl p-10'>
                    <form onSubmit={onSubmitNewService}>
                        <div className="relative mb-4 flex flex-wrap items-stretch">
                            <input
                                type="text"
                                className="relative m-0 -mr-0.5 block w-[1px] min-w-0 flex-auto rounded-l-lg border border-solid border-slate-100 bg-slate-100 bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:bg-white focus:border-primary/50 focus:text-primary-700 focus:outline-none dark:focus:border-primary/50 placeholder-slate-400 placeholder-shown:text-xs"
                                placeholder="Service Title"
                                aria-label="Service Title"
                                aria-describedby="create_service"
                                value={newService.name}
                                onChange={onChangeTitle}
                            />
                            <button
                                type="submit"
                                className="z-[2] inline-block rounded-r-lg font-medium text-white bg-primary/90 shadow-sm ring-1 ring-inset ring-primary/50 hover:bg-primary hover:fill-white hover:text-white px-6 pb-2 pt-2.5 transition duration-150 ease-in-out hover:bg-primary-300 focus:z-[3] focus:bg-primary-600"
                                id="create_service"
                            >
                                Create
                            </button>
                        </div>
                        {error.name && <span className='text-red-500'>{error.name}</span>}
                    </form>
                    <div className="mt-6 border-t border-gray-100">
                        <dl className="divide-y divide-gray-100">
                            <form onSubmit={onSubmitServices}>
                                {tempServices.map((service) => (
                                    <div className="px-4 py-2 flex justify-between items-center sm:px-0" key={service.id}>
                                        <dt className="text-sm font-medium leading-6 text-gray-900">
                                            {!service.isEditActive && <span>{service.name}</span>}
                                            {!service.isPermanent && service.isEditActive && (
                                                <input
                                                    type="text"
                                                    className="rounded border border-solid border-slate-100 bg-slate-100 bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:bg-white focus:border-primary/50 focus:text-primary-700 focus:outline-none dark:focus:border-primary/50 placeholder-slate-400 placeholder-shown:text-xs"
                                                    value={service.name}
                                                    onChange={(event) => onChangeServiceName(event, service)}
                                                    autoFocus
                                                />
                                            )}
                                        </dt>
                                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                            {!service.isPermanent && (
                                                <>
                                                    {!service.isEditActive && (
                                                        <button
                                                            type='button'
                                                            className="group border-slate-100 border hover:bg-primary/30 hover:text-primary hover:border-primary text-gray-800 font-bold px-2 py-2"
                                                            onClick={(event) => onClickEditService(event, service)}
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
                                                    )}
                                                    {service.isEditActive && (
                                                        <button
                                                            type='button'
                                                            className="group border-slate-100 border hover:bg-primary/30 hover:text-primary hover:border-primary text-gray-800 font-bold px-2 py-2"
                                                            onClick={(event) => onClickCancelEdit(event, service)}
                                                        >
                                                            <svg fill="#000000" width="15" height="15" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                                                <title>Cancel</title>
                                                                <path d="M10.771 8.518c-1.144 0.215-2.83 2.171-2.086 2.915l4.573 4.571-4.573 4.571c-0.915 0.915 1.829 3.656 2.744 2.742l4.573-4.571 4.573 4.571c0.915 0.915 3.658-1.829 2.744-2.742l-4.573-4.571 4.573-4.571c0.915-0.915-1.829-3.656-2.744-2.742l-4.573 4.571-4.573-4.571c-0.173-0.171-0.394-0.223-0.657-0.173v0zM16 1c-8.285 0-15 6.716-15 15s6.715 15 15 15 15-6.716 15-15-6.715-15-15-15zM16 4.75c6.213 0 11.25 5.037 11.25 11.25s-5.037 11.25-11.25 11.25-11.25-5.037-11.25-11.25c0.001-6.213 5.037-11.25 11.25-11.25z"></path>
                                                            </svg>
                                                        </button>
                                                    )}
                                                    <button
                                                        type='button'
                                                        className="group border-slate-100 border hover:bg-primary/30 hover:text-primary hover:border-primary text-gray-800 font-bold px-2 py-2"
                                                        onClick={(event) => onClickRemoveService(event, service)}
                                                    >
                                                        <svg className='stroke-slate-600 group-hover:stroke-primary' width="15" height="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <title>Delete</title>
                                                            <g id="Interface / Trash_Full">
                                                                <path id="Vector" d="M14 10V17M10 10V17M6 6V17.8C6 18.9201 6 19.4798 6.21799 19.9076C6.40973 20.2839 6.71547 20.5905 7.0918 20.7822C7.5192 21 8.07899 21 9.19691 21H14.8031C15.921 21 16.48 21 16.9074 20.7822C17.2837 20.5905 17.5905 20.2839 17.7822 19.9076C18 19.4802 18 18.921 18 17.8031V6M6 6H8M6 6H4M8 6H16M8 6C8 5.06812 8 4.60241 8.15224 4.23486C8.35523 3.74481 8.74432 3.35523 9.23438 3.15224C9.60192 3 10.0681 3 11 3H13C13.9319 3 14.3978 3 14.7654 3.15224C15.2554 3.35523 15.6447 3.74481 15.8477 4.23486C15.9999 4.6024 16 5.06812 16 6M16 6H18M18 6H20" strokeWidth="2" />
                                                            </g>
                                                        </svg>
                                                    </button>
                                                </>
                                            )}
                                        </dd>
                                    </div>
                                ))}
                            </form>
                        </dl>
                    </div>
                </div>
            </div>
        </>
    );
};