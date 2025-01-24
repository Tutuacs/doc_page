import Video from "./Video";

type VideoCardProps = {
    title: string;
    description: string;
    image: string;
    video: string;
    size: VideoCardSize;
    display: VideoCardDisplay;
    autoplay: boolean;
    muted: boolean;
}

enum VideoCardSize {
    big = 500,
    md = 300
}

enum VideoCardDisplay {
    right = 1,
    left = 2,
    center = 3,
}

export default function VideoCard({ props }: { props: VideoCardProps }) {
    return (
        <main className={`w-full h-[${props.size}px] my-20 flex`}>
            <div className={`${props.display == VideoCardDisplay.right ? "w-[40%]" : props.display == VideoCardDisplay.left ? "w-0" : "w-[20%]"}`}></div>
            <div className="flex lg:flex-row flex-col h-96 w-[70%] rounded-2xl border-4 border-tertiary">
                <div className="bg-primary w-full lg:w-[75%] h-[20%] lg:h-full rounded-t-xl lg:rounded-l-xl lg:rounded-tr-none">
                    <title>{props.title}</title>
                    <h1 className="text-[#009688] font-bold w-full lg:ml-[15%] text-center lg:text-start my-3 lg:my-5 text-3xl">{props.title}</h1>
                    <hr className="w-[80%] ml-[10%] -mt-4 mb-3 hidden lg:flex" />
                    <p className="lg:ml-[15%] hidden lg:flex text-[#EEEEEE] mr-[10%] leading-6">{props.description}</p>
                </div>
                <div className="bg-secondary w-full h-full rounded-b-xl lg:rounded-r-xl lg:rounded-bl-none flex justify-center items-center">
                    <Video props={props}/>
                </div>
            </div>
            <div className={`${props.display == VideoCardDisplay.left ? "w-[40%]" : props.display == VideoCardDisplay.right ? "w-0" : "w-[20%]"}`}></div>
        </main>
    )
}