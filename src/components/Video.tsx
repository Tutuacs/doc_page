"use client"

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

export default function Video({ props }: { props: VideoCardProps }) {
    return (
        <iframe className="rounded-xl" width="95%" height="90%" src={props.video}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share">
        </iframe>
    )
}