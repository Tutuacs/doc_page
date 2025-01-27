"use client"

export default function Video(video: { video: string, title: string }) {
    return (
        <div className="w-full h-full max-w-[800px] max-h-[500px] aspect-video flex justify-center items-center">
            <iframe
                className="lg:rounded-r-xl w-full h-full rounded-xl"
                src={video.video+"&origin=https://doc-page-phi.vercel.app"}
                title={video.title}
                allow="*"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen={true}>
            </iframe>
        </div>
    )
}