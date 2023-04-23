import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function InnerNav() {
    const router = useRouter();

    const onClickSelectView = (event, view) => {
        router.query.view = view;
        router.push(router);
    };

    useEffect(() => {
        if (router.query.view === undefined) {
            // router.query.view = "events";
            // router.push(router);
            router.push({ pathname: "/events", query: {view:'events'}}, '?view=events');
        }
    }, [router]);

    return (
        <div className="z-40 w-64">
            <div className="x-3 flex">
                <ul className="font-medium space-x-5 flex">
                    <li>
                        <a onClick={(event) => onClickSelectView(event, "events")} className={`group flex items-center p-2 text-gray-900 hover:bg-primary hover:rounded-lg cursor-pointer hover:text-white ${router.query.view === "events" ? " text-primary border-b-2 border-b-primary" : "text-gray-900"}`}>
                            <svg aria-hidden="true" className={`flex-shrink-0 w-3 h-3 transition duration-75 group-hover:fill-white ${router.query.view === "events" ? "fill-primary" : "fill-gray-500 "}`}  fill="none" viewBox="0 0 487.3 487.3" xmlns="http://www.w3.org/2000/svg"><g><g><path d="M487.2,69.7c0,12.9-10.5,23.4-23.4,23.4h-322c-12.9,0-23.4-10.5-23.4-23.4s10.5-23.4,23.4-23.4h322.1 C476.8,46.4,487.2,56.8,487.2,69.7z M463.9,162.3H141.8c-12.9,0-23.4,10.5-23.4,23.4s10.5,23.4,23.4,23.4h322.1 c12.9,0,23.4-10.5,23.4-23.4C487.2,172.8,476.8,162.3,463.9,162.3z M463.9,278.3H141.8c-12.9,0-23.4,10.5-23.4,23.4 s10.5,23.4,23.4,23.4h322.1c12.9,0,23.4-10.5,23.4-23.4C487.2,288.8,476.8,278.3,463.9,278.3z M463.9,394.3H141.8 c-12.9,0-23.4,10.5-23.4,23.4s10.5,23.4,23.4,23.4h322.1c12.9,0,23.4-10.5,23.4-23.4C487.2,404.8,476.8,394.3,463.9,394.3z  M38.9,30.8C17.4,30.8,0,48.2,0,69.7s17.4,39,38.9,39s38.9-17.5,38.9-39S60.4,30.8,38.9,30.8z M38.9,146.8 C17.4,146.8,0,164.2,0,185.7s17.4,38.9,38.9,38.9s38.9-17.4,38.9-38.9S60.4,146.8,38.9,146.8z M38.9,262.8 C17.4,262.8,0,280.2,0,301.7s17.4,38.9,38.9,38.9s38.9-17.4,38.9-38.9S60.4,262.8,38.9,262.8z M38.9,378.7 C17.4,378.7,0,396.1,0,417.6s17.4,38.9,38.9,38.9s38.9-17.4,38.9-38.9C77.8,396.2,60.4,378.7,38.9,378.7z"/></g></g></svg>
                            <span className="flex-1 ml-2 whitespace-nowrap">Events</span>
                        </a>
                    </li>
                    <li>
                        <a onClick={(event) => onClickSelectView(event, "calendar")} className={`group flex items-center p-2 text-gray-900 hover:bg-primary hover:rounded-lg cursor-pointer hover:text-white ${router.query.view === "calendar" ? " text-primary border-b-2 border-b-primary" : "text-gray-900"}`}>
                            <svg aria-hidden="true" className={`flex-shrink-0 w-3 h-3 transition duration-75 group-hover:fill-white ${router.query.view === "calendar" ? "fill-primary" : "fill-gray-500 "}`}  fill="none" viewBox="0 0 489 489" xmlns="http://www.w3.org/2000/svg"><g><g><path d="M75.9,267v-34.1c0-5.1,4.1-9.2,9.2-9.2h34.1c5.1,0,9.2,4.1,9.2,9.2V267c0,5.1-4.1,9.2-9.2,9.2H85.1 C80,276.1,75.9,272,75.9,267z M156.4,276.1h34.1c5.1,0,9.2-4.1,9.2-9.2v-34.1c0-5.1-4.1-9.2-9.2-9.2h-34.1c-5.1,0-9.2,4.1-9.2,9.2 v34.1C147.3,272,151.4,276.1,156.4,276.1z M227.7,276.1h34.1c5.1,0,9.2-4.1,9.2-9.2v-34.1c0-5.1-4.1-9.2-9.2-9.2h-34.1 c-5.1,0-9.2,4.1-9.2,9.2v34.1C218.6,272,222.7,276.1,227.7,276.1z M156.4,345.6h34.1c5.1,0,9.2-4.1,9.2-9.2v-34.1 c0-5.1-4.1-9.2-9.2-9.2h-34.1c-5.1,0-9.2,4.1-9.2,9.2v34.1C147.3,341.5,151.4,345.6,156.4,345.6z M227.7,345.6h34.1 c5.1,0,9.2-4.1,9.2-9.2v-34.1c0-5.1-4.1-9.2-9.2-9.2h-34.1c-5.1,0-9.2,4.1-9.2,9.2v34.1C218.6,341.5,222.7,345.6,227.7,345.6z M299.1,345.6h34.1c5.1,0,9.2-4.1,9.2-9.2v-34.1c0-5.1-4.1-9.2-9.2-9.2h-34.1c-5.1,0-9.2,4.1-9.2,9.2v34.1 C289.9,341.5,294,345.6,299.1,345.6z M85.1,345.6h34.1c5.1,0,9.2-4.1,9.2-9.2v-34.1c0-5.1-4.1-9.2-9.2-9.2H85.1 c-5.1,0-9.2,4.1-9.2,9.2v34.1C75.9,341.5,80,345.6,85.1,345.6z M227.7,415h34.1c5.1,0,9.2-4.1,9.2-9.2v-34.1 c0-5.1-4.1-9.2-9.2-9.2h-34.1c-5.1,0-9.2,4.1-9.2,9.2v34.1C218.6,410.9,222.7,415,227.7,415z M156.4,415h34.1 c5.1,0,9.2-4.1,9.2-9.2v-34.1c0-5.1-4.1-9.2-9.2-9.2h-34.1c-5.1,0-9.2,4.1-9.2,9.2v34.1C147.3,410.9,151.4,415,156.4,415z M299.1,276.1h34.1c5.1,0,9.2-4.1,9.2-9.2v-34.1c0-5.1-4.1-9.2-9.2-9.2h-34.1c-5.1,0-9.2,4.1-9.2,9.2v34.1 C289.9,272,294,276.1,299.1,276.1z M370.4,345.6h34.1c5.1,0,9.2-4.1,9.2-9.2v-34.1c0-5.1-4.1-9.2-9.2-9.2h-34.1 c-5.1,0-9.2,4.1-9.2,9.2v34.1C361.3,341.5,365.4,345.6,370.4,345.6z M299.1,415h34.1c5.1,0,9.2-4.1,9.2-9.2v-34.1 c0-5.1-4.1-9.2-9.2-9.2h-34.1c-5.1,0-9.2,4.1-9.2,9.2v34.1C289.9,410.9,294,415,299.1,415z M0,435.5V106.2 c0-29.5,24-53.5,53.5-53.5h60V19.5C113.5,8.7,122.2,0,133,0h30.5C174.3,0,183,8.7,183,19.5v33.1h123V19.5C306,8.7,314.7,0,325.5,0 H356c10.8,0,19.5,8.7,19.5,19.5v33.1h60c29.5,0,53.5,24,53.5,53.5v329.4c0,29.5-24,53.5-53.5,53.5h-382C24,489,0,465,0,435.5z M41.4,435.5c0,6.7,5.5,12.2,12.2,12.2h381.9c6.7,0,12.2-5.5,12.2-12.2V191.6H41.4V435.5z"/></g></g></svg>
                            <span className="ml-2">Calendar</span>
                        </a>
                    </li>
                   
                </ul>
            </div>
        </div>
    );
};