import Video from "./Video";

export type VideoGProps = {
    title: string;
    image: string;
    video: string;
    display: VideoCardDisplay;
    autoplay: boolean;
    muted: boolean;
}

export enum VideoCardDisplay {
    right = 1,
    left = 2,
    center = 3,
}

export default function VideoG({ props }: { props: VideoGProps }) {
    return (
        <main className={`w-full h-full flex flex-col lg:flex-row items-center lg:items-start -mt-8 lg:-mt-40 mb-10 lg:mb-20`}> {/* // ! Change -mt-8 to -mt-4 on animation */}
            <div className="hidden lg:block w-[5%]" />
            <div className="flex flex-col lg:flex-row w-full lg:w-[90%] rounded-2xl border border-tertiary overflow-hidden shadow-lg">
                {/* Left Content: Text Section */}
                <div className="bg-[#033147] w-full lg:w-[40%] p-6 lg:p-10 flex flex-col justify-center">
                    <h1 className="text-[#009687] font-bold text-center lg:text-start text-xl lg:text-3xl mb-4">{props.title}</h1>
                    <hr className="w-[80%] mx-auto lg:mx-0 lg:w-[70%] border-gray-400 mb-4 hidden lg:block" />
                    <p className="text-[#EEEEEE] text-start lg:text-start text-sm lg:text-base leading-relaxed mb-4 hidden lg:block">
                        Você já parou para pensar como pequenas decisões podem mudar completamente o rumo da sua vida? Assim como um evento que quase deixamos de ir pode nos trazer boas surpresas, cuidar da sua saúde ortopédica pode ser o início de uma grande transformação.
                    </p>
                    <p className="text-[#EEEEEE] text-start lg:text-start text-sm lg:text-base leading-relaxed mb-4 hidden lg:block">
                        Sou o Dr. Juliano Machado, especialista em lesões ortopédicas, e meu objetivo é ajudar você a superar limitações físicas e dores que impedem sua vida de ser plena. Não deixe a dor paralisar seus movimentos e o pouco tempo que temos. Imagine como será sua vida daqui a 6 meses ou 1 ano, com mais liberdade de movimento, mais disposição e momentos incríveis ao lado das pessoas que você ama.
                    </p>
                    <p className="text-[#EEEEEE] text-start lg:text-start text-sm lg:text-base leading-relaxed">
                        Acredite: cuidar de você é a escolha certa, e eu estarei ao seu lado em cada passo dessa jornada. Vamos começar hoje?
                    </p>
                </div>

                {/* Right Content: Video Section */}
                <div className="bg-secondary w-full lg:w-[60%] flex justify-center items-center p-4 lg:p-6">
                    <Video video={props.video} />
                </div>
            </div>
        </main>
    )
}