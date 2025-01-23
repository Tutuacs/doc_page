"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";

const Navbar = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [isTop, setIsTop] = useState(true);

    const toggleNavbar = () => {
        setIsExpanded(!isExpanded);
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsTop(window.scrollY === 0); // Check if the user is at the top
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`${isTop && !isExpanded ? "bg-transparent" : "bg-primary"
                } text-white flex flex-col w-full fixed p-4 overflow-hidden ${isExpanded ? "animate-expand" : "animate-collapse"
                } transition-all duration-300 ease-in-out`}
        >
            {/* Navbar principal */}
            <div className="flex justify-between items-center">
                {/* Botão de toggle à esquerda */}
                <div className="flex text-xl focus:outline-none ml-[20%] grid-cols-2">
                    <button
                        onClick={toggleNavbar}
                        className="p-2"
                    >
                        {
                            isExpanded ? (
                                <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.46967 32.4697C0.176777 32.7626 0.176777 33.2374 0.46967 33.5303C0.762563 33.8232 1.23744 33.8232 1.53033 33.5303L0.46967 32.4697ZM17.5303 17.5303C17.8232 17.2374 17.8232 16.7626 17.5303 16.4697C17.2374 16.1768 16.7626 16.1768 16.4697 16.4697L17.5303 17.5303ZM16.4697 16.4697C16.1768 16.7626 16.1768 17.2374 16.4697 17.5303C16.7626 17.8232 17.2374 17.8232 17.5303 17.5303L16.4697 16.4697ZM33.5303 1.53033C33.8232 1.23744 33.8232 0.762563 33.5303 0.46967C33.2374 0.176777 32.7626 0.176777 32.4697 0.46967L33.5303 1.53033ZM17.5303 16.4697C17.2374 16.1768 16.7626 16.1768 16.4697 16.4697C16.1768 16.7626 16.1768 17.2374 16.4697 17.5303L17.5303 16.4697ZM32.4697 33.5303C32.7626 33.8232 33.2374 33.8232 33.5303 33.5303C33.8232 33.2374 33.8232 32.7626 33.5303 32.4697L32.4697 33.5303ZM16.4697 17.5303C16.7626 17.8232 17.2374 17.8232 17.5303 17.5303C17.8232 17.2374 17.8232 16.7626 17.5303 16.4697L16.4697 17.5303ZM1.53033 0.46967C1.23744 0.176777 0.762563 0.176777 0.46967 0.46967C0.176777 0.762563 0.176777 1.23744 0.46967 1.53033L1.53033 0.46967ZM1.53033 33.5303L17.5303 17.5303L16.4697 16.4697L0.46967 32.4697L1.53033 33.5303ZM17.5303 17.5303L33.5303 1.53033L32.4697 0.46967L16.4697 16.4697L17.5303 17.5303ZM16.4697 17.5303L32.4697 33.5303L33.5303 32.4697L17.5303 16.4697L16.4697 17.5303ZM17.5303 16.4697L1.53033 0.46967L0.46967 1.53033L16.4697 17.5303L17.5303 16.4697Z" fill="white"></path>
                                </svg>

                            ) : (
                                <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 10.9167C0.585786 10.9167 0.25 11.2525 0.25 11.6667C0.25 12.0809 0.585786 12.4167 1 12.4167V10.9167ZM33 12.4167C33.4142 12.4167 33.75 12.0809 33.75 11.6667C33.75 11.2525 33.4142 10.9167 33 10.9167V12.4167ZM1 21.5833C0.585786 21.5833 0.25 21.9191 0.25 22.3333C0.25 22.7475 0.585786 23.0833 1 23.0833V21.5833ZM33 23.0833C33.4142 23.0833 33.75 22.7475 33.75 22.3333C33.75 21.9191 33.4142 21.5833 33 21.5833V23.0833ZM1 0.25C0.585786 0.25 0.25 0.585786 0.25 1C0.25 1.41421 0.585786 1.75 1 1.75V0.25ZM33 1.75C33.4142 1.75 33.75 1.41421 33.75 1C33.75 0.585786 33.4142 0.25 33 0.25V1.75ZM1 12.4167H33V10.9167H1V12.4167ZM1 23.0833H33V21.5833H1V23.0833ZM1 1.75H33V0.25H1V1.75Z" fill="white"></path>
                                </svg>
                            )
                        }
                    </button>
                    <Link href="/" onClick={() => setIsExpanded(false)}>
                        <Image width={100} height={40} src="/assinatura.png" alt="" className="" />
                    </Link>
                </div>

                <div className="hidden lg:flex gap-8 mr-[20%]">
                    <a href="https://wa.me/+5554996601120" target="_blank" className="hidden lg:flex gap-3 justify-center text-center border-2 p-2 rounded-lg  border-secondary hover:border-[#009688] transition-colors text-white hover:underline">
                        <Image width={30} height={30} src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiMwMDk2ODgiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1waG9uZSI+PHBhdGggZD0iTTIyIDE2LjkydjNhMiAyIDAgMCAxLTIuMTggMiAxOS43OSAxOS43OSAwIDAgMS04LjYzLTMuMDcgMTkuNSAxOS41IDAgMCAxLTYtNiAxOS43OSAxOS43OSAwIDAgMS0zLjA3LTguNjdBMiAyIDAgMCAxIDQuMTEgMmgzYTIgMiAwIDAgMSAyIDEuNzIgMTIuODQgMTIuODQgMCAwIDAgLjcgMi44MSAyIDIgMCAwIDEtLjQ1IDIuMTFMOC4wOSA5LjkxYTE2IDE2IDAgMCAwIDYgNmwxLjI3LTEuMjdhMiAyIDAgMCAxIDIuMTEtLjQ1IDEyLjg0IDEyLjg0IDAgMCAwIDIuODEuN0EyIDIgMCAwIDEgMjIgMTYuOTJ6Ii8+PC9zdmc+" alt="" />
                        <span className="mt-1">(54) 99660-1120</span>
                    </a>
                    <a href="https://wa.me/+5554996601120" target="_blank" className="hidden lg:flex gap-3 justify-center text-center border-2 p-2 rounded-lg  border-secondary hover:border-[#009688] transition-colors text-white hover:underline">
                        <Image className="text-amber-700" width={30} height={30} src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiMwMDk2ODgiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1jYWxlbmRhci1jaGVjay0yIj48cGF0aCBkPSJNOCAydjQiLz48cGF0aCBkPSJNMTYgMnY0Ii8+PHBhdGggZD0iTTIxIDE0VjZhMiAyIDAgMCAwLTItMkg1YTIgMiAwIDAgMC0yIDJ2MTRhMiAyIDAgMCAwIDIgMmg4Ii8+PHBhdGggZD0iTTMgMTBoMTgiLz48cGF0aCBkPSJtMTYgMjAgMiAyIDQtNCIvPjwvc3ZnPg==" alt="" />
                        <span className="mt-1">Agendamentos</span>
                    </a>
                </div>
            </div>

            {/* Links revelados ao expandir */}
            {isExpanded && (
                <div className="grid grid-cols-1 justify-between mr-[10%] ml-[20%] mt-10 gap-4">
                    {/* Esquerda */}
                    <div className="flex flex-col gap-2 flex-1">
                        <Link href="/Sobre" className="hover:underline" onClick={() => setIsExpanded(false)}>
                            Sobre
                        </Link>
                        {/* <Link href="/Contato" className="hover:underline" onClick={() => setIsExpanded(false)}>
                            Contato
                        </Link> */} {/* Without Contact */}
                        <Link href="/Mitos" className="hover:underline" onClick={() => setIsExpanded(false)}>
                            Mitos da Ortopedia
                        </Link>
                    </div>

                    {/* Centro */}
                    <div className="flex-col gap-2 flex-1 text-left hidden md:flex sm:flex">
                        {/* <a href="#link4" className="hover:underline">
                            Link 4
                        </a>
                        <a href="#link5" className="hover:underline">
                            Link 5
                        </a>
                        <a href="#link6" className="hover:underline">
                            Link 6
                        </a> */}
                    </div>

                    {/* Direita */}
                    <div className="flex-col gap-2 flex-1 text-left hidden md:flex sm:flex">
                        {/* Right */}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
