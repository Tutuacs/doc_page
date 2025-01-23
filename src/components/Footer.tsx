import Image from "next/image";

export default function Footer() {
    return (
        <main>
            <div className="bg-primary text-white min-h-96">

            </div>
            <div className="bg-[#012230e3] text-slate-300 py-2 min-h-8 flex justify-between items-center italic text-sm">
                <div className="flex items-center gap-4 ml-[20%]">
                    <Image width={100} height={40} src="/assinatura.png" alt="" className="" />
                    <span>
                        Todos os direitos reservados
                    </span>
                </div>
                <div className="mr-[20%]">Desenvolvido por <span className="font-bold">Arthur Silva</span>.</div>
            </div>
        </main>
    )
}