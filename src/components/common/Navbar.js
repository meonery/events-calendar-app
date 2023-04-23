import Image from 'next/image';

export default function Navbar() {

    return (
        <nav className="relative bg-white border-gray-200 border-b z-40">
            <div className="mx-auto flex max-w-8xl items-center justify-between p-3 px-9">
                <a href="#" className="self-center text-xl font-semibold text-primary">
                    eventbox
                </a>
                <div className="flex justify-center items-stretch">
                    <div href="#" className="flex justify-center items-center rounded-lg bg-slate-400/10 px-3 py-2 text-xs font-medium mx-5">
                        <Image
                            className="rounded-full mr-3"
                            src="/account-avatar.jpg" height="25" width="25" alt="Jane Doe"
                        />
                        Jane Doe
                    </div>
                </div>
            </div>
        </nav>
    );
};