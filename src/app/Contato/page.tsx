"use client"

import Container from "@/components/Container";
import { useState } from "react";

/*
  --primary: #033147e3;
  --secondary: #EEEEEE;
  --tertiary: #009688;
*/

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
    });

    const handleInputChange = (e: { target: { name: any; value: any; }; }) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        // Handle form submission (e.g., send data to an API or email service)
        console.log("Form Data Submitted:", formData);
    };

    return (
        <main>
            <Container>
                <main className="min-h-screen flex flex-col items-center justify-center">
                    <div className="max-w-4xl bg-secondary shadow-b-lg rounded-2xl overflow-hidden w-full">
                        {/* Header Section */}
                        <div className="bg-primary text-white p-8 text-center">
                            <h1 className="text-2xl lg:text-4xl font-bold">Entre em Contato</h1>
                            <p className="text-sm lg:text-lg mt-2">Fale conosco preenchendo o formulário abaixo</p>
                        </div>

                        {/* Form Section */}
                        <div className="bg-quaternary p-8">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid lg:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Nome</label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            className="text-[#033147] bg-secondary w-full p-3 border-[#033147] rounded-lg border focus:border-none focus:outline-none focus:ring focus:ring-[#009688]"
                                            placeholder="Seu nome"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            className="text-[#033147] bg-secondary w-full p-3 rounded-lg border border-[#033147] focus:border-none focus:outline-none focus:ring focus:ring-[#009688]"
                                            placeholder="Seu email"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="grid lg:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="phone" className="block text-gray-700 font-bold mb-2">Telefone</label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                            className="text-[#033147] bg-secondary w-full p-3 rounded-lg border border-[#033147] focus:border-none focus:outline-none focus:ring focus:ring-[#009688]"
                                            placeholder="Seu telefone"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="subject" className="block text-gray-700 font-bold mb-2">Assunto</label>
                                        <input
                                            type="text"
                                            id="subject"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleInputChange}
                                            className="text-[#033147] bg-secondary w-full p-3 rounded-lg border border-[#033147] focus:border-none focus:outline-none focus:ring focus:ring-[#009688]"
                                            placeholder="Assunto da mensagem"
                                            required
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Mensagem</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        className="text-[#033147] bg-secondary w-full p-3 rounded-lg border border-[#033147] focus:border-none focus:outline-none focus:ring focus:ring-[#009688]"
                                        placeholder="Escreva sua mensagem aqui"
                                        rows={5}
                                        required
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-primary text-white p-3 rounded-lg font-bold hover:bg-primary-dark transition"
                                >
                                    Enviar Mensagem
                                </button>
                            </form>
                        </div>
                    </div>
                </main>
            </Container>
            {/* Map Section */}
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3950.4060959888366!2d-34.89935672485372!3d-8.059993591967578!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab19f9ba5c767f%3A0xedf01d3b764ec3db!2sDr.%20Juliano%20Machado-%20ortopedia%20e%20les%C3%B5es%20esportivas!5e0!3m2!1sen!2sbr!4v1737998592561!5m2!1sen!2sbr"
                width="100%"
                height="450"
                allowFullScreen={true}
                loading="lazy"
                className="-mb-[150px] border-none"
            ></iframe>
        </main>
    );
}
