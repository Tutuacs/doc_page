"use client"

import { useState } from "react";
import Image from "next/image";

export default function PainHub() {
    const [selectedIcon, setSelectedIcon] = useState("Pescoço");
    const [selectedContent, setSelectedContent] = useState("Dores no pescoço, dificuldade para virar a cabeça ou desconforto irradiando para os ombros são sinais de que algo não está certo. Lesões musculares, má postura e até hérnias de disco podem estar por trás desses sintomas. Um ortopedista é essencial para avaliar a causa, propor tratamentos eficazes e prevenir complicações que podem limitar sua mobilidade.");
    const [selectedBold, setSelectedBold] = useState('"Não ignore o incômodo no pescoço – um ortopedista pode devolver o conforto e a liberdade de movimento ao seu dia a dia!"');

    // Dados dos ícones e títulos
    const icons = [
        {
            key: 1, id: "Pescoço", src: "/painNeck.png", alt: "Dor no Pescoço", content: "Dores no pescoço, dificuldade para virar a cabeça ou desconforto irradiando para os ombros são sinais de que algo não está certo. Lesões musculares, má postura e até hérnias de disco podem estar por trás desses sintomas. Um ortopedista é essencial para avaliar a causa, propor tratamentos eficazes e prevenir complicações que podem limitar sua mobilidade.",
            bold: '"Não ignore o incômodo no pescoço – um ortopedista pode devolver o conforto e a liberdade de movimento ao seu dia a dia!"'
        },
        {
            key: 2, id: "Ombro", src: "/painShoulder.png", alt: "Dor no Ombro", content: "Dificuldade para levantar o braço, estalos e dor crônica no ombro podem indicar lesões nos tendões, bursite ou até desgaste da articulação. Esses problemas afetam sua qualidade de vida e limitam atividades simples, como vestir-se ou carregar objetos. O ortopedista avalia cada caso e oferece soluções personalizadas, desde fisioterapia até cirurgias minimamente invasivas.",
            bold: '"Se o seu ombro está atrapalhando sua rotina, o ortopedista é o especialista certo para te colocar de volta no controle!"'
        },
        {
            key: 3, id: "Costas", src: "/painBack.png", alt: "Dor nas Costas", content: "Dor nas costas é uma das queixas mais comuns e pode ser causada por má postura, hérnias de disco ou doenças degenerativas. Deixá-la sem tratamento pode agravar o quadro e limitar suas atividades. Um ortopedista oferece desde tratamentos conservadores, como fisioterapia e mudanças no estilo de vida, até intervenções cirúrgicas para alívio duradouro. ",
            bold: '"Cuide bem da sua coluna – procure um ortopedista e alivie o peso das dores nas costas!"'
        },
        {
            key: 4, id: "Joelho", src: "/painKnee.png", alt: "Dor no Joelho", content: "Dor ao subir escadas, instabilidade ou inchaço no joelho são sinais de alerta que podem indicar lesões nos ligamentos, artrose ou outros problemas. O ortopedista é o profissional ideal para diagnosticar e tratar a causa, utilizando recursos como fisioterapia, infiltrações ou procedimentos cirúrgicos modernos.",
            bold: '"Seu joelho merece atenção – consulte um ortopedista e recupere sua mobilidade com segurança!"'
        },
        {
            key: 5, id: "Tornozelo", src: "/painAnkle.png", alt: "Dor no Tornozelo", content: "Lesões no tornozelo, como torções frequentes ou dores persistentes, podem atrapalhar sua vida diária e até comprometer sua estabilidade ao caminhar. O ortopedista é fundamental para tratar essas condições, oferecendo desde tratamentos simples, como imobilização e fisioterapia, até correções cirúrgicas quando necessário. ",
            bold: '"Não deixe as dores no tornozelo travarem seus passos – procure um ortopedista e caminhe com confiança novamente!"'
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
                <div className="relative bg-tertiary lg:w-[10%] w-full lg:h-full h-[80px] lg:rounded-l-xl lg:rounded-tr-none rounded-t-xl">
                    {/* Left Arrow for small/medium screens */}
                    <button
                        className=" absolute left-2 top-[50%] transform -translate-y-[50%] bg-primary p-2 rounded-full shadow-lg lg:hidden"
                        onClick={handlePrevious}
                    >
                        <span className="text-white text-2xl font-bold">‹</span>
                    </button>
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
                    {/* Right Arrow for small/medium screens */}
                    <button
                        className="absolute right-2 top-[50%] transform -translate-y-[50%] bg-primary p-2 rounded-full shadow-lg lg:hidden"
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
                    <div className="w-[80%] mx-auto flex flex-col items-center overflow-y-auto h-[calc(100%-100px)]">
                        <p className="text-justify text-sm lg:text-lg mb-4 text-[#EEEEEE]">
                            {selectedContent}
                            <br />
                            <br />
                            <span className="font-bold text-[#FFFFFF]">{selectedBold}</span>
                        </p>
                        <hr className="w-full mx-auto mb-4" />
                    </div>
                    {/* <div className="flex justify-end lg:-mt-10 -mt-2 mr-1">
                        <a className="text-sm text-end w-full" href="https://www.flaticon.com/authors/leremy" title="body pain icons">Body icons created by Leremy - Flaticon</a>
                    </div> */}
                </div>
            </div>
        </main>
    );
}
