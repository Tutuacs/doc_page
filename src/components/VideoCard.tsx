import Video from "./Video";

export type VideoCardProps = {
    title: string;
    description: string;
    link: string;
    display: VideoCardDisplay;
}

export enum VideoCardDisplay {
    right = 1,
    left = 2,
    center = 3,
}

export default function VideoCard({ props }: { props: VideoCardProps }) {
    return (
        <main className="w-full h-full flex flex-col lg:flex-row items-center lg:items-start mt-20">
            {/* Left Spacer */}
            <div className={`w-[5%]`}></div>

            {/* Content Wrapper */}
            <div className="flex flex-col lg:flex-row w-full lg:w-full rounded-2xl border border-tertiary overflow-hidden shadow-lg">
                {/* Left Content: Text Section */}
                <div className="bg-primary w-full lg:w-[40%] p-6 lg:p-10 flex flex-col justify-center">
                    <h1 className="text-[#009688] font-bold text-center lg:text-center text-xl lg:text-xl lg:mb-4 mb-0">{props.title}</h1>
                    <hr className="w-full mx-auto lg:mx-0 border-gray-400 mb-4 hidden lg:block" />
                    <p className="text-[#EEEEEE] text-justify text-sm lg:text-md leading-relaxed mb-4 hidden lg:block">
                        {props.description}
                    </p>
                </div>

                {/* Right Content: Video Section with Animation */}
                <div
                    className={`bg-secondary w-full lg:w-[60%] flex justify-center items-center p-4 lg:p-6 transition-all duration-500 ease-in-out ${props.link ? 'opacity-100 max-h-screen' : 'opacity-0 max-h-0 overflow-hidden'}`}
                >
                    {props.link && <Video video={props.link} title={props.title} />}
                </div>
            </div>

            {/* Right Spacer */}
            <div className={`w-[5%]`}></div>
        </main>
    )
}