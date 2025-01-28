"use client"

import { useState } from "react";
import Image from "next/image";
import VideoCard, { VideoCardDisplay } from "./VideoCard";

export default function PainHub() {
    const [selectedIcon, setSelectedIcon] = useState("Cuidados com o Pescoço");
    const [selectedContent, setSelectedContent] = useState("Dores no pescoço, dificuldade para virar a cabeça ou desconforto irradiando para os ombros são sinais de que algo não está certo. Lesões musculares, má postura e até hérnias de disco podem estar por trás desses sintomas. Um ortopedista é essencial para avaliar a causa, propor tratamentos eficazes e prevenir complicações que podem limitar sua mobilidade.");
    const [selectedBold, setSelectedBold] = useState('"Não ignore o incômodo no pescoço – um ortopedista pode devolver o conforto e a liberdade de movimento ao seu dia a dia!"');

    // Dados dos ícones e títulos
    const icons = [
        {
            key: 1, id: "Cuidados com o Pescoço", src: "/painNeck.png", alt: "Dor no Pescoço", content: "Dores no pescoço, dificuldade para virar a cabeça ou desconforto irradiando para os ombros são sinais de que algo não está certo. Lesões musculares, má postura e até hérnias de disco podem estar por trás desses sintomas. Um ortopedista é essencial para avaliar a causa, propor tratamentos eficazes e prevenir complicações que podem limitar sua mobilidade.",
            bold: '"Não ignore o incômodo no pescoço – um ortopedista pode devolver o conforto e a liberdade de movimento ao seu dia a dia!"',
            videos: [
                {
                    Title: "“O que eu penso sobre tratamento ortopédico?”",
                    Link: "https://www.youtube.com/embed/d1bfkBRSST8?rel=1&autoplay=0&mute=0", // ! Caut
                    Description: "Sera que tempo é realmente o nosso bem mais precioso? Para mim Tempo de qualidade é o nosso bem mais precioso, e a dor pode roubar esse pouco tempo que temos com filhos, netos, nos exercitando... Mas como a ortopedia pode te ajudar a recuperar esse tempo? Assista o vídeo e descubra!"
                },
                {
                    Title: "“Doutor, qual é um remédio bom para…”",
                    Link: "https://www.youtube.com/embed/LsqWskZQhDU?rel=1&autoplay=0&mute=0",  // ! Caut
                    Description: "Assim como uma receita de bolo pode não matar sua fome, um remedio ortopedico pode não ser a solucao para o seu problema, variando seu estilo de vida e saude seu tratamento pode ser diferente. Assista o vídeo e descubra!"
                },
            ],
        },
        {
            key: 2, id: "Cuidados com o Ombro", src: "/painShoulder.png", alt: "Dor no Ombro", content: "Dificuldade para levantar o braço, estalos e dor crônica no ombro podem indicar lesões nos tendões, bursite ou até desgaste da articulação. Esses problemas afetam sua qualidade de vida e limitam atividades simples, como vestir-se ou carregar objetos. O ortopedista avalia cada caso e oferece soluções personalizadas, desde fisioterapia até cirurgias minimamente invasivas.",
            bold: '"Se o seu ombro está atrapalhando sua rotina, o ortopedista é o especialista certo para te colocar de volta no controle!"',
            videos: [
                {
                    Title: "“O que é bursite no ombro?”",
                    Link: "https://www.youtube.com/embed/mGhufvzea-I?rel=1&autoplay=0&mute=0",
                    Description: "A bursite no ombro é uma inflamação da bursa, ela é responsavel por proteger os tendoes e ligamentos do atrito com os ossos. Mas o que causa a bursite no ombro? Quais os sintomas? Como tratar? Assista o vídeo e descubra!"
                },
                {
                    Title: "“Ruptura do manguito rotador!”",
                    Link: "https://www.youtube.com/embed/bJLs9fQslcI?rel=1&autoplay=0&mute=0",
                    Description: "Quanto mais tempo sem buscar a causa das dores no ombro, maiores as chances de ocorrer uma ruptura do manguito rotador, ela é uma lesao comum no ombro, ela pode ser causada por um trauma ou pelo desgaste natural do tendao. Mas como saber se voce tem uma ruptura do manguito rotador? Quais os sintomas? Como tratar? Assista o vídeo e descubra!"
                },
            ],
        },
        {
            key: 3, id: "Cuidados com as Costas", src: "/painBack.png", alt: "Dor nas Costas", content: "Dor nas costas é uma das queixas mais comuns e pode ser causada por má postura, hérnias de disco ou doenças degenerativas. Deixá-la sem tratamento pode agravar o quadro e limitar suas atividades. Um ortopedista oferece desde tratamentos conservadores, como fisioterapia e mudanças no estilo de vida, até intervenções cirúrgicas para alívio duradouro. ",
            bold: '"Cuide bem da sua coluna – procure um ortopedista e alivie o peso das dores nas costas!"',
            videos: [
                {
                    Title: '“Quem tem problema de coluna nunca mais fica bom…”',
                    Link: "https://www.youtube.com/embed/skg2YCuLZYo?rel=1&autoplay=0&mute=0",
                    Description: "Segundo a OMS(Organização Mundial de Saúde) aproximadamente 80% da populacao sofre ou vai sofrer problemas de coluna. Mas será que quem tem problema de coluna nunca mais fica bom? As unica solucao é cirurgia? Assista o vídeo e descubra!"
                },
                {
                    Title: '“Será que após os "ENTA (40, 50, 60…)" não teremos mais saúde?”',
                    Link: "https://www.youtube.com/embed/kHSD6vgW1Gk?rel=1&autoplay=0&mute=0",
                    Description: 'A expectativa do povo brasileiro so aumenta, mas se apos os "enta" não tivermos mais saude, de que adianta viver mais? Será que apos os "enta" não ter saude não tem mais jeito? Assista o vídeo e descubra!'
                },
                {
                    Title: '“Dr. o que é hérnia de disco?”',
                    Link: "https://www.youtube.com/embed/Xc1Ygveu7Ko?rel=1&autoplay=0&mute=0",
                    Description: "A hérnia de disco é uma lesão que ocorre na coluna vertebral, ela é causada pelo desgaste natural do disco intervertebral, mas o que causa a hérnia de disco? Quais os sintomas? Como tratar? Assista o vídeo e descubra!"
                },
                {
                    Title: '“O que é osteoporose?”',
                    Link: "https://www.youtube.com/embed/eQpaAmO-ZrM?rel=1&autoplay=0&mute=0",
                    Description: "A osteoporose é uma doença que enfraquece os ossos, ela é mais comum em mulheres após a menopausa, mas o que causa a osteoporose? Quais os sintomas? Como tratar? Assista o vídeo e descubra!"
                },
            ],
        },
        {
            key: 4, id: "Cuidados com o Joelho", src: "/painKnee.png", alt: "Dor no Joelho", content: "Dor ao subir escadas, instabilidade ou inchaço no joelho são sinais de alerta que podem indicar lesões nos ligamentos, artrose ou outros problemas. O ortopedista é o profissional ideal para diagnosticar e tratar a causa, utilizando recursos como fisioterapia, infiltrações ou procedimentos cirúrgicos modernos.",
            bold: '"Seu joelho merece atenção – consulte um ortopedista e recupere sua mobilidade com segurança!"',
            videos: [
                {
                    Title: "“Dr. qual a importância do checkup ortopédico?”",
                    Link: "https://www.youtube.com/embed/UCXd2ncRaC8?rel=1&autoplay=0&mute=0",
                    Description: "Segundo dados de 2020 a expectativa no Brasil subiu para 80 anos, mas de que adianta estarmos vivendo mais mas sem qualidade? Precisamos cuidar do nosso corpo mais do que nossos bens. Assista o video e descubra!"
                },
            ],
        },
        {
            key: 5, id: "Cuidados com o Tornozelo", src: "/painAnkle.png", alt: "Dor no Tornozelo", content: "Lesões no tornozelo, como torções frequentes ou dores persistentes, podem atrapalhar sua vida diária e até comprometer sua estabilidade ao caminhar. O ortopedista é fundamental para tratar essas condições, oferecendo desde tratamentos simples, como imobilização e fisioterapia, até correções cirúrgicas quando necessário. ",
            bold: '"Não deixe as dores no tornozelo travarem seus passos – procure um ortopedista e caminhe com confiança novamente!"',
            videos: [
                {
                    Title: "“Não gosto de médicos, só vou quando não aguento mais…”",
                    Link: "https://www.youtube.com/embed/eH81cIw7F34?rel=1&autoplay=0&mute=0",
                    Description: "E se não fizessemos as revisoes programadas de nossos carros? E se so levássemos ao mecânico quando o carro quebrasse? Será que o carro duraria tanto? E se fizessemos o mesmo com nosso corpo? Será que ele duraria tanto? Assista o vídeo e descubra!"
                },
            ],
        },
    ];

    const handleNext = () => {
        const currentIndex = icons.findIndex((icon) => icon.id === selectedIcon);
        const nextIndex = (currentIndex + 1) % icons.length;

        setTimeout(() => {
            setSelectedIcon(icons[nextIndex].id);
            setSelectedContent(icons[nextIndex].content);
            setSelectedBold(icons[nextIndex].bold);
        }, 300); // Delay of 300ms before state updates
    };

    const handlePrevious = () => {
        const currentIndex = icons.findIndex((icon) => icon.id === selectedIcon);
        const prevIndex = (currentIndex - 1 + icons.length) % icons.length;

        setTimeout(() => {
            setSelectedIcon(icons[prevIndex].id);
            setSelectedContent(icons[prevIndex].content);
            setSelectedBold(icons[prevIndex].bold);
        }, 300); // Delay of 300ms before state updates
    };

    return (
        <main>
            <div className="w-[90%] lg:h-[800px] h-[600px] lg:flex flex-row -mb-10 mt-10 mx-auto">
                {/* Sidebar com ícones */}
                <div className="bg-transparent lg:w-[10%] lg:h-full h-[80px] lg:rounded-l-xl lg:rounded-bl-none rounded-t-xl flex flex-row mb-0">
                    {/* Left Arrow for small/medium screens */}
                    <button
                        className="transform bg-primary p-2 m-0 rounded-tl-full shadow-lg lg:hidden"
                        onClick={handlePrevious}
                    >
                        <span className="text-white text-2xl font-bold">‹</span>
                    </button>
                    <div className="bg-tertiary w-full lg:h-full h-[80px] lg:rounded-l-xl lg:rounded-tr-none rounded-none">
                        <div className="flex lg:flex-col flex-row items-start h-full mx-5 lg:my-5 lg:mx-3 gap-4 overflow-x-auto scroll-smooth group">
                            {icons.map((icon) => (
                                <button
                                    key={icon.id}
                                    className={`flex-shrink-0 ${selectedIcon === icon.id
                                        ? "bg-primary border-secondary border-2"
                                        : "bg-quaternary border-primary border-2 group-hover:animate-pulse"
                                        } rounded-2xl p-1 transition-all duration-200 lg:my-0 my-auto`}
                                    onClick={() => {
                                        setSelectedIcon(icon.id);
                                        setSelectedContent(icon.content);
                                        setSelectedBold(icon.bold);
                                    }}
                                >
                                    <Image
                                        src={icon.src}
                                        width={60}
                                        height={60}
                                        alt={icon.alt}
                                        className={`${selectedIcon === icon.id ? "" : "opacity-60"}`}
                                    />
                                </button>
                            ))}
                        </div>
                    </div>
                    {/* Right Arrow for small/medium screens */}
                    <button
                        className="transform bg-primary p-2 rounded-tr-full shadow-lg lg:hidden"
                        onClick={handleNext}
                    >
                        <span className="text-white text-2xl font-bold">›</span>
                    </button>
                </div>
                {/* Conteúdo principal */}
                <div className="bg-primary w-full h-full lg:rounded-r-xl lg:rounded-bl-none rounded-b-xl flex-col lg:flex-col">
                    <h1 className="text-[#009687] font-bold text-center text-2xl lg:text-6xl py-4">
                        {selectedIcon}
                    </h1>
                    <hr className="w-[80%] mx-auto mb-4" />
                    <div className="w-[80%] mx-auto flex flex-col items-center overflow-y-auto lg:h-[calc(100%-150px)] h-[calc(100%-100px)]">
                        <p className="text-justify text-sm lg:text-lg mb-4 text-[#EEEEEE]">
                            {selectedContent}
                            <br />
                            <br />
                            <span className="font-bold text-[#FFFFFF]">{selectedBold}</span>
                        </p>
                        <hr className="w-full mx-auto mb-4" />
                        <div className="flex flex-col gap-4">
                            {icons.find((icon) => icon.id === selectedIcon)?.videos.map((video) => (
                                <VideoCard key={video.Link} props={{ title: video.Title, link: video.Link, description: video.Description, display: VideoCardDisplay.center }} />
                            ))}
                            <span className="mt-10" />
                        </div>
                    </div>
                    {/* <div className="flex justify-end lg:-mt-10 -mt-2 mr-1">
                        <a className="text-sm text-end w-full" href="https://www.flaticon.com/authors/leremy" title="body pain icons">Body icons created by Leremy - Flaticon</a>
                    </div> */}
                </div>
            </div>
        </main>
    );
}
