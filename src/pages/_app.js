import Navbar from '@/components/common/Navbar'
import Sidebar from '@/components/common/Sidebar'
import { allEvents } from '@/data/events'
import { allServices } from '@/data/services'
import '@/styles/globals.css'
import { Poppins } from 'next/font/google'
import { useState } from 'react'

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['300', '400', '500', '600', '700'],
    variable: '--font-poppins',
})

export default function App({ Component, pageProps }) {

    const [services, setServices] = useState(allServices);
    const [events, setEvents] = useState(allEvents);

    return (
        <main className={`${poppins.variable} font-sans`}>
            <Navbar />
            <Sidebar />
            <Component
                {...pageProps}
                services={services}
                setServices={setServices}
                events={events}
                setEvents={setEvents}
            />
        </main>
    )
}
