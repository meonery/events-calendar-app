import Image from 'next/image';
import { Fragment } from 'react';
import { formatDate, monthDate } from '@/utils/helper';

export default function ViewEventModal({
    isViewEventModalOpen,
    setIsViewEventModalOpen,
    selectedEvent
}) {

    return (
        <>
            {isViewEventModalOpen && selectedEvent ? (
                <>
                    <div className="w-full justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                        <div className="relative w-2/5 my-6 max-w-full">
                            <div className="border-0 rounded-xl shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">

                                <div className="relative p-8 h-[30rem] overflow-y-auto overflow-scroll">
                                    <p className='text-[15px] font-medium text-slate-600 mb-2'>{monthDate(selectedEvent.start)}</p>
                                    <h2 className="text-3xl font-bold text-slate-800 ">{selectedEvent.title}</h2>
                                    <div className="bg-gray-50 rounded-lg py-4 px-5 my-5 mb-14">
                                        <p className="text-slate-500 text-[14px]">By <span className="font-medium text-black">Jane Doe</span></p>
                                    </div>


                                    <h4 className="font-semibold text-lg mb-2">When and what</h4>
                                    <div className=" grid grid-cols-2 gap-3 mb-5">
                                        <div className="flex items-center">
                                            <div className="pr-3">
                                                <div className="bg-gray-50 rounded-lg p-3 my-3">
                                                    <svg className="fill-primary" fill="none" height="20" width="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 489 489">
                                                        <g><g>
                                                            <path d="M75.9,267v-34.1c0-5.1,4.1-9.2,9.2-9.2h34.1c5.1,0,9.2,4.1,9.2,9.2V267c0,5.1-4.1,9.2-9.2,9.2H85.1
                                                                    C80,276.1,75.9,272,75.9,267z M156.4,276.1h34.1c5.1,0,9.2-4.1,9.2-9.2v-34.1c0-5.1-4.1-9.2-9.2-9.2h-34.1c-5.1,0-9.2,4.1-9.2,9.2
                                                                    v34.1C147.3,272,151.4,276.1,156.4,276.1z M227.7,276.1h34.1c5.1,0,9.2-4.1,9.2-9.2v-34.1c0-5.1-4.1-9.2-9.2-9.2h-34.1
                                                                    c-5.1,0-9.2,4.1-9.2,9.2v34.1C218.6,272,222.7,276.1,227.7,276.1z M156.4,345.6h34.1c5.1,0,9.2-4.1,9.2-9.2v-34.1
                                                                    c0-5.1-4.1-9.2-9.2-9.2h-34.1c-5.1,0-9.2,4.1-9.2,9.2v34.1C147.3,341.5,151.4,345.6,156.4,345.6z M227.7,345.6h34.1
                                                                    c5.1,0,9.2-4.1,9.2-9.2v-34.1c0-5.1-4.1-9.2-9.2-9.2h-34.1c-5.1,0-9.2,4.1-9.2,9.2v34.1C218.6,341.5,222.7,345.6,227.7,345.6z
                                                                    M299.1,345.6h34.1c5.1,0,9.2-4.1,9.2-9.2v-34.1c0-5.1-4.1-9.2-9.2-9.2h-34.1c-5.1,0-9.2,4.1-9.2,9.2v34.1
                                                                    C289.9,341.5,294,345.6,299.1,345.6z M85.1,345.6h34.1c5.1,0,9.2-4.1,9.2-9.2v-34.1c0-5.1-4.1-9.2-9.2-9.2H85.1
                                                                    c-5.1,0-9.2,4.1-9.2,9.2v34.1C75.9,341.5,80,345.6,85.1,345.6z M227.7,415h34.1c5.1,0,9.2-4.1,9.2-9.2v-34.1
                                                                    c0-5.1-4.1-9.2-9.2-9.2h-34.1c-5.1,0-9.2,4.1-9.2,9.2v34.1C218.6,410.9,222.7,415,227.7,415z M156.4,415h34.1
                                                                    c5.1,0,9.2-4.1,9.2-9.2v-34.1c0-5.1-4.1-9.2-9.2-9.2h-34.1c-5.1,0-9.2,4.1-9.2,9.2v34.1C147.3,410.9,151.4,415,156.4,415z
                                                                    M299.1,276.1h34.1c5.1,0,9.2-4.1,9.2-9.2v-34.1c0-5.1-4.1-9.2-9.2-9.2h-34.1c-5.1,0-9.2,4.1-9.2,9.2v34.1
                                                                    C289.9,272,294,276.1,299.1,276.1z M370.4,345.6h34.1c5.1,0,9.2-4.1,9.2-9.2v-34.1c0-5.1-4.1-9.2-9.2-9.2h-34.1
                                                                    c-5.1,0-9.2,4.1-9.2,9.2v34.1C361.3,341.5,365.4,345.6,370.4,345.6z M299.1,415h34.1c5.1,0,9.2-4.1,9.2-9.2v-34.1
                                                                    c0-5.1-4.1-9.2-9.2-9.2h-34.1c-5.1,0-9.2,4.1-9.2,9.2v34.1C289.9,410.9,294,415,299.1,415z M0,435.5V106.2
                                                                    c0-29.5,24-53.5,53.5-53.5h60V19.5C113.5,8.7,122.2,0,133,0h30.5C174.3,0,183,8.7,183,19.5v33.1h123V19.5C306,8.7,314.7,0,325.5,0
                                                                    H356c10.8,0,19.5,8.7,19.5,19.5v33.1h60c29.5,0,53.5,24,53.5,53.5v329.4c0,29.5-24,53.5-53.5,53.5h-382C24,489,0,465,0,435.5z
                                                                    M41.4,435.5c0,6.7,5.5,12.2,12.2,12.2h381.9c6.7,0,12.2-5.5,12.2-12.2V191.6H41.4V435.5z"/>
                                                        </g></g>
                                                    </svg>
                                                </div>
                                            </div>
                                            <div className="p-2">
                                                <p className="font-medium text-[15px] text-black mb-2">Date and Time</p>
                                                <p className='text-xs text-gray-600'>{formatDate(selectedEvent.start)} - {formatDate(selectedEvent.end)} </p>
                                            </div>

                                        </div>
                                        <div className="flex items-center">
                                            <div className="pr-3">
                                                <div className="bg-gray-50 rounded-lg p-3 my-5">
                                                    <svg className="fill-primary" fill="none" height="20" width="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                                        <path d="M12.0002 8C9.79111 8 8.00024 9.79086 8.00024 12C8.00024 14.2091 9.79111 16 12.0002 16C14.2094 16 16.0002 14.2091 16.0002 12C16.0002 9.79086 14.2094 8 12.0002 8ZM10.0002 12C10.0002 10.8954 10.8957 10 12.0002 10C13.1048 10 14.0002 10.8954 14.0002 12C14.0002 13.1046 13.1048 14 12.0002 14C10.8957 14 10.0002 13.1046 10.0002 12Z" />
                                                        <path d="M11.2867 0.5C9.88583 0.5 8.6461 1.46745 8.37171 2.85605L8.29264 3.25622C8.10489 4.20638 7.06195 4.83059 6.04511 4.48813L5.64825 4.35447C4.32246 3.90796 2.83873 4.42968 2.11836 5.63933L1.40492 6.83735C0.67773 8.05846 0.954349 9.60487 2.03927 10.5142L2.35714 10.7806C3.12939 11.4279 3.12939 12.5721 2.35714 13.2194L2.03927 13.4858C0.954349 14.3951 0.67773 15.9415 1.40492 17.1626L2.11833 18.3606C2.83872 19.5703 4.3225 20.092 5.64831 19.6455L6.04506 19.5118C7.06191 19.1693 8.1049 19.7935 8.29264 20.7437L8.37172 21.1439C8.6461 22.5325 9.88584 23.5 11.2867 23.5H12.7136C14.1146 23.5 15.3543 22.5325 15.6287 21.1438L15.7077 20.7438C15.8954 19.7936 16.9384 19.1693 17.9553 19.5118L18.3521 19.6455C19.6779 20.092 21.1617 19.5703 21.8821 18.3606L22.5955 17.1627C23.3227 15.9416 23.046 14.3951 21.9611 13.4858L21.6432 13.2194C20.8709 12.5722 20.8709 11.4278 21.6432 10.7806L21.9611 10.5142C23.046 9.60489 23.3227 8.05845 22.5955 6.83732L21.8821 5.63932C21.1617 4.42968 19.678 3.90795 18.3522 4.35444L17.9552 4.48814C16.9384 4.83059 15.8954 4.20634 15.7077 3.25617L15.6287 2.85616C15.3543 1.46751 14.1146 0.5 12.7136 0.5H11.2867ZM10.3338 3.24375C10.4149 2.83334 10.7983 2.5 11.2867 2.5H12.7136C13.2021 2.5 13.5855 2.83336 13.6666 3.24378L13.7456 3.64379C14.1791 5.83811 16.4909 7.09167 18.5935 6.38353L18.9905 6.24984C19.4495 6.09527 19.9394 6.28595 20.1637 6.66264L20.8771 7.86064C21.0946 8.22587 21.0208 8.69271 20.6764 8.98135L20.3586 9.24773C18.6325 10.6943 18.6325 13.3057 20.3586 14.7523L20.6764 15.0186C21.0208 15.3073 21.0946 15.7741 20.8771 16.1394L20.1637 17.3373C19.9394 17.714 19.4495 17.9047 18.9905 17.7501L18.5936 17.6164C16.4909 16.9082 14.1791 18.1618 13.7456 20.3562L13.6666 20.7562C13.5855 21.1666 13.2021 21.5 12.7136 21.5H11.2867C10.7983 21.5 10.4149 21.1667 10.3338 20.7562L10.2547 20.356C9.82113 18.1617 7.50931 16.9082 5.40665 17.6165L5.0099 17.7501C4.55092 17.9047 4.06104 17.714 3.83671 17.3373L3.1233 16.1393C2.9058 15.7741 2.97959 15.3073 3.32398 15.0186L3.64185 14.7522C5.36782 13.3056 5.36781 10.6944 3.64185 9.24779L3.32398 8.98137C2.97959 8.69273 2.9058 8.2259 3.1233 7.86067L3.83674 6.66266C4.06106 6.28596 4.55093 6.09528 5.0099 6.24986L5.40676 6.38352C7.50938 7.09166 9.82112 5.83819 10.2547 3.64392L10.3338 3.24375Z" />
                                                    </svg>
                                                </div>
                                            </div>
                                            <div className="p-2">
                                                <p className="font-medium text-[15px] text-black mb-2">Service</p>
                                                <p className='text-xs text-gray-600'>{selectedEvent.service}</p>
                                            </div>
                                        </div>
                                    </div>

                                    <hr className='border-dashed my-8' />
                                    <h4 className="font-semibold text-sm mb-2">Attachments</h4>
                                        <div className="mt-2">

                                            <div className="">
                                            
                                                {/*File Preview zone*/}
                                                <div className='mt-8'>
                                                    <ul className="flex flex-1 flex-wrap -m-1">
                                                        {selectedEvent.attachments.length === 0 && (
                                                            <li className="h-full w-full text-center flex flex-col items-center justify-center">
                                                                <svg className='fill-gray-300' width="30" height="30" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                                                                    <path d="M8,16c-4.4,0-8,3.6-8,8s3.6,8,8,8s8-3.6,8-8S12.4,16,8,16z M11,25H5c-0.6,0-1-0.4-1-1s0.4-1,1-1h6c0.6,0,1,0.4,1,1
                                                                    S11.6,25,11,25z"/>
                                                                    <path d="M29,8h-8.9l-2.3-3.5C17.7,4.2,17.3,4,17,4H7C5.3,4,4,5.3,4,7v7.8C5.2,14.3,6.6,14,8,14c5.5,0,10,4.5,10,10
                                                                c0,1.4-0.3,2.8-0.8,4H29c1.7,0,3-1.3,3-3V11C32,9.3,30.7,8,29,8z M30,23.6L21.4,10H29c0.6,0,1,0.4,1,1V23.6z"/>
                                                                </svg>
                                                                <span className="text-small text-gray-300">No files attached</span>
                                                            </li>
                                                        )}
                                                    </ul>
                                                    <ul className='flex flex-wrap'>
                                                        {selectedEvent.attachments.map((attachment, index) => (
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

                                                                        </article>
                                                                    </li>
                                                                )}
                                                                {attachment.type.includes("image") && (
                                                                    <li key={index} className="block p-1 w-1/5 sm:w-1/3 md:w-1/4 lg:w-32 xl:w-1/8 h-24">
                                                                        <article tabIndex="0" className="group hasImage w-full h-full rounded-md focus:outline-none focus:shadow-outline bg-gray-100 cursor-pointer relative text-transparent hover:text-white shadow-sm">
                                                                            <Image src={URL.createObjectURL(attachment)} fill alt="upload preview" className="img-preview w-full h-full sticky object-cover rounded-md bg-fixed" />

                                                                            
                                                                        </article>
                                                                    </li>
                                                                )}
                                                                {attachment.type.includes("application") && (
                                                                    <li className="block p-1 w-1/5 sm:w-1/3 md:w-1/4 lg:w-32 xl:w-1/8 h-24">
                                                                        <article tabIndex="0" className="group hasImage w-full h-full rounded-md focus:outline-none focus:shadow-outline bg-gray-100 cursor-pointer relative text-transparent hover:text-white shadow-sm">
                                                                            <p className='text-xs text-gray-700 p-2'>{attachment.name}</p>
                                                                            
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
                                <div className='flex items-center justify-end gap-x-6 p-6'>
                                    <button className="text-sm font-regular leading-6 text-slate-600 p-2 rounded-lg hover:bg-slate-50"
                                        type="button"
                                        onClick={(event) => setIsViewEventModalOpen(false)}
                                    >
                                        Close
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