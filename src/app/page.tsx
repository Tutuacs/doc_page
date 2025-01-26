import Container from "@/components/Container";
import PainHub from "@/components/PainHub";
import { VideoCardDisplay } from "@/components/VideoCard";
import VideoG, { VideoGProps } from "@/components/VideoG";

export default function Home() {

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
            <PainHub />
          </Container>
        </div>
        <div className="w-full h-[200px]"></div>
      </main>
    </div>
  );
}
