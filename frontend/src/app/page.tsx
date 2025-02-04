import AnimatedContent from "@/components/AnimatedContent";
import Container from "@/components/Container";
// import PainBody from "@/components/PainBody";
import PainHub from "@/components/PainHub";
import { VideoCardDisplay } from "@/components/VideoCard";
import VideoG, { VideoGProps } from "@/components/VideoG";

export default function Home() {

  const video1: VideoGProps = {
    title: "O Cuidado Que Você Merece",
    image: "Thumbnail",
    video: "https://www.youtube.com/embed/kNKCqeDnOis?rel=0&autoplay=1&mute=1", // ! Caut
    display: VideoCardDisplay.right,
    autoplay: true,
    muted: true,
  }

  return (
    <div className="min-h-[1500px]">
      <main>
        <Container>
          <AnimatedContent>
            <VideoG props={video1} />
          </AnimatedContent>
        </Container>
        <div className="w-full h-full bg-quaternary">
          <Container>
            {/* <PainBody /> */}
            <PainHub />
          </Container>
        </div>
        <div className="w-full h-[200px]"></div>
      </main>
    </div>
  );
}
