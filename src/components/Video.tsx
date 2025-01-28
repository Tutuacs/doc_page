"use client"

export default function Video(video: { video: string, title: string }) {
    return (
        <div className="w-full h-full max-w-[800px] max-h-[500px] aspect-video flex justify-center items-center">
            <iframe
                className="lg:rounded-r-xl w-full h-full rounded-xl"
                src={video.video+"&playsinline=0&modestbranding=0&enablejsapi=1&origin=https%3A%2F%2Fdoc-page-phi.vercel.app&widgetid=1"}
                title={video.title}
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen={true}>
            </iframe>
        </div>
    )
}