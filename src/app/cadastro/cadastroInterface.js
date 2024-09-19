
"use client"; 

import { useState } from "react";
import Image from "next/image";
import flor from "../public/images/nav/logo.png";

export default function CadastroInterface() {
  const [formData, setFormData] = useState({
    nome: "",
    sobrenome: "",
    email: "",
    senha: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8080/v1/Lotus/cadastro", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        setSuccessMessage("Cadastro realizado com sucesso!");
        setErrorMessage("");
        console.log("Usuário cadastrado:", data);
      } else {
        setErrorMessage("Erro ao cadastrar. Tente novamente.");
        setSuccessMessage("");
      }
    } catch (error) {
      setErrorMessage("Erro na comunicação com o servidor.");
      setSuccessMessage("");
    }
  };

  return (
    <div className="overflow-hidden min-h-screen bg-white font-[family-name:var(--font-geist-sans)] flex flex-col">
      <header className="flex flex-col md:flex-row md:h-[20%] p-4 items-center">
        <div className="w-full flex items-center justify-center md:justify-start gap-5">
          <Image src={flor} alt="logo" className="w-24 h-16" />
          <h1 className="font-semibold text-3xl md:text-4xl text-gray-400 text-center md:text-left">
            Cadastro
          </h1>
        </div>
      </header>

      <main className="flex-col flex items-center justify-center p-4 md:p-20 md:p-40">
        <form onSubmit={handleSubmit} className="w-full max-w-lg flex flex-col items-center gap-6">
          {errorMessage && <p className="text-blue-700">{errorMessage}</p>}
          {successMessage && <p className="text-pink-600">{successMessage}</p>}

          <input
            type="text"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
            className="border-4 border-[#eebda9] rounded-2xl p-3 w-full"
            placeholder="Nome"
            required
          />
          <input
            type="text"
            name="sobrenome"
            value={formData.sobrenome}
            onChange={handleChange}
            className="border-4 border-[#eebda9] rounded-2xl p-3 w-full"
            placeholder="Sobrenome"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="border-4 border-[#eebda9] rounded-2xl p-3 w-full"
            placeholder="E-mail"
            required
          />
          <input
            type="password"
            name="senha"
            value={formData.senha}
            onChange={handleChange}
            className="border-4 border-[#eebda9] rounded-2xl p-3 w-full"
            placeholder="Senha"
            required
          />

          <button type="submit" className="bg-[#FFEBE3] w-full max-w-xs h-12 rounded-2xl mt-6">
            Cadastrar
          </button>
        </form>

        <p className="mt-4 text-center p-6 text-[13px]">
          Já possui uma conta?
          <button className="text-orange-400 ml-1">Faça login.</button>
        </p>
      </main>
    </div>
  );
}
