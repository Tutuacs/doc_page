import Container from "@/components/Container";
import VideoCard, { VideoCardDisplay, VideoCardProps, VideoCardSize } from "@/components/VideoCard";

export default function Home() {

  const video: VideoCardProps = {
    title: "Me conheça",
    description: "Prazer, me chamo Juliano Machado, sou Ortopedista e Traumatologista.",
    image: "Thumbnail",
    video: "https://www.youtube.com/embed/kNKCqeDnOis?si=8dHZiiZS83nvaCAA?rel=0&autoplay=1&mute=1",
    size: VideoCardSize.big,
    display: VideoCardDisplay.right,
    autoplay: true,
    muted: true,
  }

  const video2: VideoCardProps = {
    title: "Me conheça",
    description: "Prazer, me chamo Juliano Machado, sou Ortopedista e Traumatologista.",
    image: "Thumbnail",
    video: "https://www.youtube.com/embed/kNKCqeDnOis?si=8dHZiiZS83nvaCAA?rel=0&autoplay=1&mute=1",
    size: VideoCardSize.big,
    display: VideoCardDisplay.center,
    autoplay: true,
    muted: true,
  }

  const video3: VideoCardProps = {
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
