"use client"

export default function Video({video}: {video: string}) {
    return (
        <iframe className="rounded-xl" width="95%" height="90%" src={video}
            title="YouTube video player"
            allowFullScreen={true}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share ">
        </iframe>
    )
}