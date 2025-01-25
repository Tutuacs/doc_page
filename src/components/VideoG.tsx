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
        <main className={`w-full h-full -mt-40 -mb-20 flex`}>
            <div className="w-[20%]" />
            <div className="flex lg:flex-row flex-col h-[800] w-[90%] rounded-2xl border-4 border-tertiary">
                <div className="bg-[#033147] w-full lg:w-[75%] h-[10%] lg:h-full rounded-t-xl lg:rounded-l-xl lg:rounded-tr-none">
                    <h1 className="text-[#009687] font-bold w-full lg:ml-[15%] text-center lg:text-start my-3 lg:my-5 lg:text-2xl text-3xl">{props.title}</h1>
                    <hr className="w-[80%] ml-[10%] -mt-4 mb-3 hidden lg:flex" />
                    <p className="lg:ml-[15%] hidden lg:flex text-[#EEEEEE] mr-[10%]">Você já parou para pensar como pequenas decisões podem mudar completamente o rumo da sua vida? Assim como um evento que quase deixamos de ir pode nos trazer boas surpresas, cuidar da sua saúde ortopédica pode ser o início de uma grande transformação.</p><br />
                    <p className="lg:ml-[15%] hidden lg:flex text-[#EEEEEE] mr-[10%]">Sou o Dr. Juliano Machado, especialista em lesões ortopédicas, e meu objetivo é ajudar você a superar limitações físicas e dores que impedem sua vida de ser plena. Não deixe a dor paralisar seus movimentos e o poco tempo que temos. Imagine como será sua vida daqui a 6 meses ou 1 ano, com mais liberdade de movimento, mais disposição e momentos incríveis ao lado das pessoas que você ama.</p><br />
                    <p className="lg:ml-[15%] hidden lg:flex text-[#EEEEEE] mr-[10%]">Acredite: cuidar de você é a escolha certa, e eu estarei ao seu lado em cada passo dessa jornada. Vamos começar hoje?</p><br />
                </div>
                <div className="bg-secondary w-full h-full rounded-b-xl lg:rounded-r-xl lg:rounded-bl-none flex justify-center items-center">
                    <Video video={props.video} />
                </div>
            </div>
        </main>
    )
}