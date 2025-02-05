import Image from "next/image";
import Link from "next/link";
import Assinatura from "./Assinatura";

export default function Footer() {
    return (
        <main>
            <div className="-mb-[150px]">
                <div className="flex lg:flex-row flex-col items-center mx-auto h-60 w-[80%] lg:w-[60%] rounded-lg">
                    <div className="bg-tertiary p-4 lg:p-0 flex flex-col h-full w-full lg:w-1/2 justify-center rounded-t-xl lg:rounded-l-xl lg:rounded-tr-none">
                        <div className="mx-auto">
                            <h1 className="lg:text-3xl text-xl text-[#EEEEEE] font-bold text-center">Agende sua consulta</h1>
                            {/* <hr className="mt-2 mb-1 border-[#033147]" /> */}
                            <div className="mt-4 text-center">
                                <a
                                    href="https://wa.me/+558196317222"
                                    target="_blank"
                                    className=" bg-primary flex gap-3 justify-center text-center border-2 py-4 px-2 rounded-2xl border-[#033147] hover:border-[#EEEEEE] hover:text-[#dbe0da] transition-colors text-white"
                                >
                                    <Image width={30} height={30} src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiMwMDk2ODgiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1jYWxlbmRhci1jaGVjay0yIj48cGF0aCBkPSJNOCAydjQiLz48cGF0aCBkPSJNMTYgMnY0Ii8+PHBhdGggZD0iTTIxIDE0VjZhMiAyIDAgMCAwLTItMkg1YTIgMiAwIDAgMC0yIDJ2MTRhMiAyIDAgMCAwIDIgMmg4Ii8+PHBhdGggZD0iTTMgMTBoMTgiLz48cGF0aCBkPSJtMTYgMjAgMiAyIDQtNCIvPjwvc3ZnPg==" alt="icone agendamentos" />
                                    <span className="mt-1 text-[#009688]">Agendamentos</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="bg-secondary flex flex-col p-4 lg:p-0 gap-2 lg:gap-4 w-full lg:w-1/2 h-full justify-center rounded-b-xl lg:rounded-r-xl lg:rounded-bl-none">
                        <div className="mx-auto">
                            <h1 className="text-[#033147e3] lg:text-2xl text-xl font-bold text-center">Acompanhe nas redes sociais</h1>
                            <hr className="mt-2 mb-1 border-[#033147]" />
                            <div className="mt-4 text-center flex gap-8 justify-center">
                                { /* // ! Facebook */}
                                {/* <Link href="/" className="hover:animate-pulse">
                                    <svg width="28" height="28" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_17_61)">
                                            <path d="M24 0C10.7453 0 0 10.7453 0 24C0 35.255 7.74912 44.6995 18.2026 47.2934V31.3344H13.2538V24H18.2026V20.8397C18.2026 12.671 21.8995 8.8848 29.9194 8.8848C31.44 8.8848 34.0637 9.18336 35.137 9.48096V16.129C34.5706 16.0694 33.5866 16.0397 32.3645 16.0397C28.4294 16.0397 26.9088 17.5306 26.9088 21.4061V24H34.7482L33.4013 31.3344H26.9088V47.8243C38.7926 46.3891 48.001 36.2707 48.001 24C48 10.7453 37.2547 0 24 0Z" fill="#009688" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_17_61">
                                                <rect width="48" height="48" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </Link> */}
                                { /* Instagram */}
                                <Link target="_blank" href="https://www.instagram.com/dr.julianomachado?igsh=MWpuZWFwZWNxemVvdg%3D%3D&utm_source=qr" className="hover:animate-pulse">
                                    <svg width="28" height="28" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_17_63)">
                                            <path d="M24 4.32187C30.4125 4.32187 31.1719 4.35 33.6938 4.4625C36.0375 4.56562 37.3031 4.95938 38.1469 5.2875C39.2625 5.71875 40.0688 6.24375 40.9031 7.07812C41.7469 7.92188 42.2625 8.71875 42.6938 9.83438C43.0219 10.6781 43.4156 11.9531 43.5188 14.2875C43.6313 16.8187 43.6594 17.5781 43.6594 23.9813C43.6594 30.3938 43.6313 31.1531 43.5188 33.675C43.4156 36.0188 43.0219 37.2844 42.6938 38.1281C42.2625 39.2438 41.7375 40.05 40.9031 40.8844C40.0594 41.7281 39.2625 42.2438 38.1469 42.675C37.3031 43.0031 36.0281 43.3969 33.6938 43.5C31.1625 43.6125 30.4031 43.6406 24 43.6406C17.5875 43.6406 16.8281 43.6125 14.3063 43.5C11.9625 43.3969 10.6969 43.0031 9.85313 42.675C8.7375 42.2438 7.93125 41.7188 7.09688 40.8844C6.25313 40.0406 5.7375 39.2438 5.30625 38.1281C4.97813 37.2844 4.58438 36.0094 4.48125 33.675C4.36875 31.1438 4.34063 30.3844 4.34063 23.9813C4.34063 17.5688 4.36875 16.8094 4.48125 14.2875C4.58438 11.9437 4.97813 10.6781 5.30625 9.83438C5.7375 8.71875 6.2625 7.9125 7.09688 7.07812C7.94063 6.23438 8.7375 5.71875 9.85313 5.2875C10.6969 4.95938 11.9719 4.56562 14.3063 4.4625C16.8281 4.35 17.5875 4.32187 24 4.32187ZM24 0C17.4844 0 16.6688 0.028125 14.1094 0.140625C11.5594 0.253125 9.80625 0.665625 8.2875 1.25625C6.70312 1.875 5.3625 2.69062 4.03125 4.03125C2.69063 5.3625 1.875 6.70313 1.25625 8.27813C0.665625 9.80625 0.253125 11.55 0.140625 14.1C0.028125 16.6687 0 17.4844 0 24C0 30.5156 0.028125 31.3312 0.140625 33.8906C0.253125 36.4406 0.665625 38.1938 1.25625 39.7125C1.875 41.2969 2.69063 42.6375 4.03125 43.9688C5.3625 45.3 6.70313 46.125 8.27813 46.7344C9.80625 47.325 11.55 47.7375 14.1 47.85C16.6594 47.9625 17.475 47.9906 23.9906 47.9906C30.5063 47.9906 31.3219 47.9625 33.8813 47.85C36.4313 47.7375 38.1844 47.325 39.7031 46.7344C41.2781 46.125 42.6188 45.3 43.95 43.9688C45.2812 42.6375 46.1063 41.2969 46.7156 39.7219C47.3063 38.1938 47.7188 36.45 47.8313 33.9C47.9438 31.3406 47.9719 30.525 47.9719 24.0094C47.9719 17.4938 47.9438 16.6781 47.8313 14.1188C47.7188 11.5688 47.3063 9.81563 46.7156 8.29688C46.125 6.70312 45.3094 5.3625 43.9688 4.03125C42.6375 2.7 41.2969 1.875 39.7219 1.26562C38.1938 0.675 36.45 0.2625 33.9 0.15C31.3313 0.028125 30.5156 0 24 0Z" fill="#009688" />
                                            <path d="M24 11.6719C17.1938 11.6719 11.6719 17.1938 11.6719 24C11.6719 30.8062 17.1938 36.3281 24 36.3281C30.8062 36.3281 36.3281 30.8062 36.3281 24C36.3281 17.1938 30.8062 11.6719 24 11.6719ZM24 31.9969C19.5844 31.9969 16.0031 28.4156 16.0031 24C16.0031 19.5844 19.5844 16.0031 24 16.0031C28.4156 16.0031 31.9969 19.5844 31.9969 24C31.9969 28.4156 28.4156 31.9969 24 31.9969Z" fill="#009688" />
                                            <path d="M39.6937 11.1843C39.6937 12.778 38.4 14.0624 36.8156 14.0624C35.2219 14.0624 33.9375 12.7687 33.9375 11.1843C33.9375 9.59053 35.2313 8.30615 36.8156 8.30615C38.4 8.30615 39.6937 9.5999 39.6937 11.1843Z" fill="#009688" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_17_63">
                                                <rect width="48" height="48" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </Link>
                                { /* Whatsap */}
                                <Link href="https://wa.me/+558196317222" className="hover:animate-pulse">
                                    <svg width="28" height="28" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 48L3.374 35.674C1.292 32.066 0.198 27.976 0.2 23.782C0.206 10.67 10.876 0 23.986 0C30.348 0.002 36.32 2.48 40.812 6.976C45.302 11.472 47.774 17.448 47.772 23.804C47.766 36.918 37.096 47.588 23.986 47.588C20.006 47.586 16.084 46.588 12.61 44.692L0 48ZM13.194 40.386C16.546 42.376 19.746 43.568 23.978 43.57C34.874 43.57 43.75 34.702 43.756 23.8C43.76 12.876 34.926 4.02 23.994 4.016C13.09 4.016 4.22 12.884 4.216 23.784C4.214 28.234 5.518 31.566 7.708 35.052L5.71 42.348L13.194 40.386ZM35.968 29.458C35.82 29.21 35.424 29.062 34.828 28.764C34.234 28.466 31.312 27.028 30.766 26.83C30.222 26.632 29.826 26.532 29.428 27.128C29.032 27.722 27.892 29.062 27.546 29.458C27.2 29.854 26.852 29.904 26.258 29.606C25.664 29.308 23.748 28.682 21.478 26.656C19.712 25.08 18.518 23.134 18.172 22.538C17.826 21.944 18.136 21.622 18.432 21.326C18.7 21.06 19.026 20.632 19.324 20.284C19.626 19.94 19.724 19.692 19.924 19.294C20.122 18.898 20.024 18.55 19.874 18.252C19.724 17.956 18.536 15.03 18.042 13.84C17.558 12.682 17.068 12.838 16.704 12.82L15.564 12.8C15.168 12.8 14.524 12.948 13.98 13.544C13.436 14.14 11.9 15.576 11.9 18.502C11.9 21.428 14.03 24.254 14.326 24.65C14.624 25.046 18.516 31.05 24.478 33.624C25.896 34.236 27.004 34.602 27.866 34.876C29.29 35.328 30.586 35.264 31.61 35.112C32.752 34.942 35.126 33.674 35.622 32.286C36.118 30.896 36.118 29.706 35.968 29.458Z" fill="#009688" />
                                    </svg>
                                </Link>
                                { /* Youtube */}
                                <Link target="_blank" href="https://www.youtube.com/@dr.julianomachado" className="hover:animate-pulse">
                                    <svg width="28" height="28" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M47.5219 14.4001C47.5219 14.4001 47.0531 11.0907 45.6094 9.6376C43.7812 7.7251 41.7375 7.71572 40.8 7.60322C34.0875 7.11572 24.0094 7.11572 24.0094 7.11572H23.9906C23.9906 7.11572 13.9125 7.11572 7.2 7.60322C6.2625 7.71572 4.21875 7.7251 2.39062 9.6376C0.946875 11.0907 0.4875 14.4001 0.4875 14.4001C0.4875 14.4001 0 18.2907 0 22.172V25.8095C0 29.6907 0.478125 33.5813 0.478125 33.5813C0.478125 33.5813 0.946875 36.8907 2.38125 38.3438C4.20937 40.2563 6.60938 40.1907 7.67813 40.397C11.5219 40.7626 24 40.8751 24 40.8751C24 40.8751 34.0875 40.8563 40.8 40.3782C41.7375 40.2657 43.7812 40.2563 45.6094 38.3438C47.0531 36.8907 47.5219 33.5813 47.5219 33.5813C47.5219 33.5813 48 29.7001 48 25.8095V22.172C48 18.2907 47.5219 14.4001 47.5219 14.4001ZM19.0406 30.2251V16.7345L32.0062 23.5032L19.0406 30.2251Z" fill="#009688" />
                                    </svg>
                                </Link>
                                { /* // ! Doctoralia */}
                                {/* <Link href="/" className="hover:animate-pulse">
                                    <svg width="55" height="55" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="filter">
                                        <g xmlns="http://www.w3.org/2000/svg" clipPath="url(#clip0_24_131)"><path d="M13.3088 19.0415L17.0876 23.4286L20.8479 20.7004L17.1797 14.6359C15.5207 15.6498 13.8986 17.6405 13.3272 19.0599" fill="#009688" /><path d="M7.88939 23.4286C10.9862 17.106 16.9032 12.4239 24 11.023L22.5622 6.58063C13.9539 7.55759 6.63594 12.7742 2.70967 20.0921L7.88939 23.4286Z" fill="#009688" /><path d="M9.01383 8.35021L1.43779 6.56219L0 10.9862L5.27189 13.2166C6.35945 12.129 7.5576 11.1705 8.88479 10.3594C10.6912 9.25344 12.2581 8.51611 14.9124 7.61289L14.3226 0.571411H9.67742L9.03226 8.35021H9.01383Z" fill="#009688" /></g><defs xmlns="http://www.w3.org/2000/svg"><clipPath id="clip0_24_131"><rect width="24" height="22.8571" fill="white" transform="translate(0 0.571411)" /></clipPath></defs>
                                    </svg>
                                </Link> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-primary h-[150px]">
            </div>
            <div className="bg-primary w-full h-80">
                <div className="flex justify-center items-center h-full w-full">
                    <div className="w-[80%] lg:w-[60%] flex flex-col lg:flex-row justify-between items-center">
                        <div className="w-full">
                            <Image
                                src={"/assinatura.png"}
                                width={200}
                                height={50}
                                alt="Assinatura logo"
                                className="lg:flex hidden lg:col-span-1"
                            />
                            <h1 className="text-[#EEEEEE] font-bold lg:flex hidden lg:col-span-1">
                                Juliano Machado - Ortopedista e Traumatologista
                            </h1>
                        </div>
                        <div className="flex flex-col w-full justify-center items-center text-[#EEEEEE] font-bold">
                            <div className="flex items-center justify-start gap-4 -ml-20 mb-1">
                                <Image
                                    width={30}
                                    height={30}
                                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiMwMDk2ODgiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1waG9uZSI+PHBhdGggZD0iTTIyIDE2LjkydjNhMiAyIDAgMCAxLTIuMTggMiAxOS43OSAxOS43OSAwIDAgMS04LjYzLTMuMDcgMTkuNSAxOS41IDAgMCAxLTYtNiAxOS43OSAxOS43OSAwIDAgMS0zLjA3LTguNjdBMiAyIDAgMCAxIDQuMTEgMmgzYTIgMiAwIDAgMSAyIDEuNzIgMTIuODQgMTIuODQgMCAwIDAgLjcgMi44MSAyIDIgMCAwIDEtLjQ1IDIuMTFMOC4wOSA5LjkxYTE2IDE2IDAgMCAwIDYgNmwxLjI3LTEuMjdhMiAyIDAgMCAxIDIuMTEtLjQ1IDEyLjg0IDEyLjg0IDAgMCAwIDIuODEuN0EyIDIgMCAwIDEgMjIgMTYuOTJ6Ii8+PC9zdmc+"
                                    alt="Telefone ligar"
                                />
                                <h1 className="text-[#EEEEEE] font-bold">
                                    Telefones:
                                </h1>
                            </div>
                            <ul className="text-[#EEEEEE] list-none pl-0 flex flex-col items-end gap-1">
                                <li>(81) 3221-5514</li>
                                <li>(81) 3216-3606</li>
                                <li>(81) 3216-3619</li>
                            </ul>
                            <Link target="_blank" className="mt-5 hover:animate-pulse py-2 px-4 border bg-secondary border-[#009688] rounded-full" href={"https://maps.app.goo.gl/cKrTtQS2K2s38ryQ7"}>
                                <div className="flex gap-4 text-[#009688] font-bold">
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#009688" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pinned">
                                            <path d="M18 8c0 3.613-3.869 7.429-5.393 8.795a1 1 0 0 1-1.214 0C9.87 15.429 6 11.613 6 8a6 6 0 0 1 12 0" />
                                            <circle cx="12" cy="8" r="2" /><path d="M8.714 14h-3.71a1 1 0 0 0-.948.683l-2.004 6A1 1 0 0 0 3 22h18a1 1 0 0 0 .948-1.316l-2-6a1 1 0 0 0-.949-.684h-3.712" />
                                        </svg>
                                    </div>
                                    Veja no mapa!
                                </div>
                            </Link>
                        </div>

                    </div>
                </div>
            </div>

            <div className="bg-[#033147] text-slate-300 py-2 min-h-8 flex lg:flex-row flex-col align-center justify-center lg:justify-between items-center italic text-sm">
                <div className="flex justify-center items-center mt-1 mb-3 w-full">
                    <Assinatura />
                    <span className="justify-center mt-1">
                        Todos os direitos reservados
                    </span>
                </div>
                <hr className="border-1 ml-[5%] mr:ml-[10%] lg:ml-[20%] w-[70%] mb-1 lg:hidden" />
                <div className="flex justify-center items-center mt-1 mb-3 w-full">
                    <p>Desenvolvido por </p>
                    <Link target="_blank" href="https://www.linkedin.com/in/arthur-silva-277606250" className="ml-1 font-bold">Arthur Silva</Link>
                </div>
            </div>
        </main>
    )
}