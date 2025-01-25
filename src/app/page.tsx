import Container from "@/components/Container";
import PainHub from "@/components/PainHub";
import VideoCard, { VideoCardDisplay, VideoCardProps, VideoCardSize } from "@/components/VideoCard";
import VideoG, { VideoGProps } from "@/components/VideoG";

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

  const video1: VideoGProps = {
    title: "O Cuidado Que Você Merece",
    image: "Thumbnail",
    video: "https://www.youtube.com/embed/kNKCqeDnOis?si=8dHZiiZS83nvaCAA?rel=0&autoplay=1&mute=1",
    display: VideoCardDisplay.right,
    autoplay: true,
    muted: true,
  }

  return (
    <div className="min-h-[1500px]">
      <main>
        <Container>
          <VideoG props={video1} />
        </Container>
        <div className="w-full h-full bg-quaternary">
          <Container>
            <PainHub>
            </PainHub>
          </Container>
        </div>
          <div className="w-full h-[200px]"></div>
      </main>
    </div>
  );
}
