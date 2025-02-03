import Container from "@/components/Container";
import Image from "next/image";

export default function About() {
    return (
        <Container>
            <main className="min-h-screen flex items-center justify-center mb-20 mt-20">
                <div className="max-w-5xl bg-secondary shadow-b-lg rounded-2xl overflow-hidden">
                    {/* Header Section */}
                    <div className="bg-primary text-white p-8 text-center lg:text-start grid lg:grid-cols-3">
                        <Image src={"/assinatura.png"} width={200} height={50} alt="Assinatura logo" className="lg:flex hidden lg:col-span-1" />
                        <div className="w-full justify-center text-[#009688] lg:col-span-2">
                            <h1 className="text-xl lg:text-4xl font-bold">Dr. Juliano Machado</h1>
                            <p className="text-sm lg:text-lg mt-2">Especialista em Ortopedia e Traumatologia</p>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="p-8 grid lg:grid-cols-3 gap-8">
                        {/* Image Section */}
                        <div className="lg:col-span-1 flex justify-center items-center">
                            <Image
                                src="/drimg.png" // Substitua pelo caminho da imagem do médico
                                width={300}
                                height={300}
                                alt="Foto do Dr. Juliano Machado"
                                className="rounded-full shadow-md bg-tertiary lg:max-h-[300px] "
                            />
                        </div>

                        {/* About Section */}
                        <div className="lg:col-span-2">
                            <h2 className="text-2xl font-bold text-[#009688] mb-4">Sobre o Dr. Juliano Machado</h2>
                            <p className="text-gray-700 leading-relaxed text-justify">
                                Graduado em Medicina pela Universidade Federal de Pernambuco (UFPE) em
                                2005, Dr. Juliano Machado possui mais de 17 anos de experiência e uma
                                carreira consolidada na área médica. Com ampla atuação em ortopedia
                                e traumatologia, impactou positivamente centenas de vidas ao longo
                                de sua trajetória.
                            </p>
                            <p className="text-gray-700 leading-relaxed mt-4 text-justify">
                                Realizou Residência Médica em Ortopedia e Traumatologia na Santa Casa de
                                Misericórdia de São Paulo (SCMSP), uma das instituições mais renomadas do
                                país, com foco em traumatologia esportiva, lesões do dia a dia e fraturas.
                                Em 2009, concluiu sua especialização em Cirurgia do Ombro e Cotovelo no
                                Instituto de Ortopedia e Traumatologia de São Paulo (HC/IOT-SP).
                            </p>
                            <p className="text-gray-700 leading-relaxed mt-4 text-justify">
                                Atualmente, atua como cirurgião ortopedista e traumatologista em clínica
                                privada e como preceptor de ensino em programas de residência médica no
                                Hospital Otávio de Freitas (HOF) e no Hospital Miguel Arraes (HMA).
                            </p>
                        </div>
                    </div>

                    {/* Qualifications Section */}
                    <div className="bg-quaternary p-8">
                        <h3 className="text-xl font-bold text-[#009688] mb-4">Qualificações</h3>
                        <ul className="list-disc list-inside space-y-2 text-gray-700 text-justify">
                            <li>Graduação em Medicina pela Universidade Federal de Pernambuco (UFPE).</li>
                            <li>
                                Residência Médica em Ortopedia e Traumatologia pela Santa Casa de
                                Misericórdia de São Paulo (HSCMSP).
                            </li>
                            <li>
                                Subespecialização em Cirurgia do Ombro e Cotovelo pelo Instituto de
                                Ortopedia e Traumatologia de São Paulo (HC/IOT-SP).
                            </li>
                            <li>
                                Preceptor de ensino em residência médica no Hospital Otávio de Freitas (HOF).
                            </li>
                            <li>
                                Preceptor de ensino em residência médica no Hospital Miguel Arraes (HMA).
                            </li>
                            <li>Membro Especialista pela Sociedade Brasileira de Ortopedia e Traumatologia (SBOT).</li>
                        </ul>
                    </div>
                </div>
            </main>
        </Container>
    );
}