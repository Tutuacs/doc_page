"use client";

import Container from "@/components/Container";
import { useState } from "react";

/*
  --primary: #033147e3;
  --secondary: #EEEEEE;
  --tertiary: #009688;
  --quaternary: #dbe0da;
*/

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  // Estado para controlar o status da submissão: "idle" | "success" | "error"
  const [submissionStatus, setSubmissionStatus] = useState<"idle" | "success" | "error">("idle");

  const validate = () => {
    let valid = true;
    const newErrors = {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: ""
    };

    if (formData.name.trim() === "") {
      newErrors.name = "Nome é obrigatório.";
      valid = false;
    }

    if (formData.email.trim() === "") {
      newErrors.email = "Email é obrigatório.";
      valid = false;
    } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.email)) {
      newErrors.email = "Email inválido.";
      valid = false;
    }

    if (formData.phone.trim() === "") {
      newErrors.phone = "Telefone é obrigatório.";
      valid = false;
    }

    if (formData.subject.trim() === "") {
      newErrors.subject = "Assunto é obrigatório.";
      valid = false;
    }

    if (formData.message.trim() === "") {
      newErrors.message = "Mensagem é obrigatória.";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleInputChange = (e: { target: { name: string; value: string } }) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Limpa a mensagem de erro do campo conforme o usuário digita
    if (errors[name as keyof typeof errors]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    // Reseta o status para que novas tentativas possam ocorrer
    setSubmissionStatus("idle");

    if (validate()) {
      try {
        const res = await fetch("/api/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(formData)
        });
  
        if (res.status === 200) {
          setSubmissionStatus("success");
          // Opcional: Limpar o formulário ou realizar outras ações após o sucesso
        } else {
          setSubmissionStatus("error");
        }
      } catch {
        setSubmissionStatus("error");
      }
    } else {
      console.log("Validação falhou.");
    }
  };

  return (
    <main className="-mt-20">
      <Container>
        <main className="min-h-screen flex flex-col items-center justify-center">
          <div className="max-w-4xl bg-secondary shadow-b-lg rounded-2xl overflow-hidden w-full">
            {/* Header Section */}
            <div className="bg-primary text-[#009688] p-8 text-center">
              <h1 className="text-2xl lg:text-4xl font-bold text-[#009688]">Entre em Contato</h1>
              <p className="text-sm lg:text-lg mt-2 text-[#EEEEEE]">Fale conosco preenchendo o formulário abaixo</p>
            </div>

            {/* Form Section */}
            <div className="bg-quaternary p-8">
              <form onSubmit={handleSubmit} className="space-y-6" id="contact">
                <div className="grid lg:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Nome</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`text-[#033147] bg-secondary w-full p-3 rounded-lg border focus:border-none focus:outline-none focus:ring focus:ring-[#009688] ${errors.name ? "border-red-500" : "border-[#033147]"}`}
                      placeholder="Seu nome"
                    />
                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`text-[#033147] bg-secondary w-full p-3 rounded-lg border focus:border-none focus:outline-none focus:ring focus:ring-[#009688] ${errors.email ? "border-red-500" : "border-[#033147]"}`}
                      placeholder="Seu email"
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
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
                      className={`text-[#033147] bg-secondary w-full p-3 rounded-lg border focus:border-none focus:outline-none focus:ring focus:ring-[#009688] ${errors.phone ? "border-red-500" : "border-[#033147]"}`}
                      placeholder="Seu telefone"
                    />
                    {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-gray-700 font-bold mb-2">Assunto</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className={`text-[#033147] bg-secondary w-full p-3 rounded-lg border focus:border-none focus:outline-none focus:ring focus:ring-[#009688] ${errors.subject ? "border-red-500" : "border-[#033147]"}`}
                      placeholder="Assunto da mensagem"
                    />
                    {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject}</p>}
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Mensagem</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className={`text-[#033147] bg-secondary w-full p-3 rounded-lg border focus:border-none focus:outline-none focus:ring focus:ring-[#009688] ${errors.message ? "border-red-500" : "border-[#033147]"}`}
                    placeholder="Escreva sua mensagem aqui"
                    rows={5}
                  ></textarea>
                  {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary text-white p-3 rounded-lg font-bold hover:bg-primary-dark transition"
                >
                  Enviar Mensagem
                </button>
              </form>

              {/* Exibição da animação/mensagem após a submissão */}
              {submissionStatus === "success" && (
                <div className="flex flex-col items-center mt-6">
                  <div className="bg-green-500 rounded-full p-4 animate-bounce">
                    <svg
                      className="w-10 h-10 text-white"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="mt-2 text-green-700 font-bold">Mensagem enviada com sucesso!</p>
                </div>
              )}

              {submissionStatus === "error" && (
                <div className="mt-6 p-4 bg-red-200 text-red-800 rounded text-center">
                  Serviço indisponível no momento. Tente novamente mais tarde.
                </div>
              )}
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
