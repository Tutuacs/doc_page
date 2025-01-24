import Container from "@/components/Container";
import VideoCard from "@/components/VideoCard";

type VideoCardProps = {
  title: string;
  description: string;
  image: string;
  video: string;
  size: VideoCardSize;
  display: VideoCardDisplay;
  autoplay: boolean;
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

export default function Home() {

  let video = {
    title: "Me conheça",
    description: "Prazer, me chamo Juliano Machado, sou Ortopedista e Traumatologista.",
    image: "Thumbnail",
    video: "https://www.youtube.com/embed/kNKCqeDnOis?si=8dHZiiZS83nvaCAA?rel=0&autoplay=1&mute=1",
    size: VideoCardSize.big,
    display: VideoCardDisplay.right,
    autoplay: true,
    muted: true,
  }

  let video2 = {
    title: "Me conheça",
    description: "Prazer, me chamo Juliano Machado, sou Ortopedista e Traumatologista.",
    image: "Thumbnail",
    video: "https://www.youtube.com/embed/kNKCqeDnOis?si=8dHZiiZS83nvaCAA?rel=0&autoplay=1&mute=1",
    size: VideoCardSize.big,
    display: VideoCardDisplay.center,
    autoplay: true,
    muted: true,
  }

  let video3 = {
    title: "Me conheça",
    description: "Prazer, me chamo Juliano Machado, sou Ortopedista e Traumatologista.",
    image: "Thumbnail",
    video: "https://www.youtube.com/embed/kNKCqeDnOis?si=8dHZiiZS83nvaCAA?rel=0&autoplay=1&mute=1",
    size: VideoCardSize.big,
    display: VideoCardDisplay.left,
    autoplay: true,
    muted: true,
  }

  return (
    <div className="min-h-[1500px]">
      <main>
        <Container>
          <VideoCard props={video}/>
          <VideoCard props={video2}/>
          <VideoCard props={video3}/>
          <VideoCard props={video2}/>
          <VideoCard props={video}/>
        </Container>
      </main>
    </div>
  );
}
