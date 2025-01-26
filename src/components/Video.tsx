"use client"

export default function Video(video : { video: string, title: string }) {
    return (
        <div className="w-full h-full max-w-[800px] max-h-[500px] aspect-video flex justify-center items-center">
            <iframe
                className="lg:rounded-r-xl w-full h-full rounded-xl" 
                src={video.video}
                title={video.title}
                allowFullScreen={true}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share">
            </iframe>
        </div>
    )
}