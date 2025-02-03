import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Sobre Medico Ortopedista - Juliano Machado",
    description: "Ortopedista e Traumatologista | Recife - PE",
};

export default function About({ children }: { children: React.ReactNode }) {
    return (
        <main>
            {children}
        </main>
    )
}