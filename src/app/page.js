'use client'; // Adicione esta linha no início do arquivo para indicar que é um Client Component

import { useState } from 'react';
import Image from "next/image";
import photo from "../app/public/images/rodapé/flor.png"; // Corrigido para começar com "/"
import flor from "../app/public/images/nav/logo.png"; // Corrigido para começar com "/"
import { cadastrarUsuario } from '../app/lib/auth'; // Certifique-se de que esse caminho está correto

export default function Home() {
  const [formData, setFormData] = useState({
    nome: '',
    sobrenome: '',
    email: '',
    senha: ''
  });
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { nome, sobrenome, email, senha } = formData;

    if (nome === '' || sobrenome === '' || email === '' || senha === '') {
      setErrorMessage('Por Favor Preencha todos os Campos !!');
      return;
    }

    const result = await cadastrarUsuario(nome, sobrenome, email, senha);
    if (result.success) {
      setSuccessMessage('Cadastro realizado com sucesso!');
      setErrorMessage('');
      // Opcional: redirecionar para outra página ou limpar o formulário
      // window.location.href = '/outra-pagina';
    } else {
      setErrorMessage(result.message);
      setSuccessMessage('');
    }
  };

  return (
    <div className="min-h-screen bg-white font-[family-name:var(--font-geist-sans)] flex flex-col">
      <header className="flex flex-col md:flex-row md:h-[20%] p-4 items-center">
        <div className="w-full flex items-center justify-center md:justify-start gap-5">
          <Image src={flor} alt="logo" className="w-24 h-16" />
          <h1 className="font-semibold text-3xl md:text-4xl text-gray-400 text-center md:text-left">Cadastro</h1>
        </div>
      </header>

      <main className="flex-grow flex items-center justify-center p-4 md:p-20">
        <form onSubmit={handleSubmit} className="w-full max-w-[600px] flex flex-col items-center space-y-6">
          {errorMessage && <p className="text-red-500">{errorMessage}</p>}
          {successMessage && <p className="text-green-500">{successMessage}</p>}
          <input
            type="text"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
            className="border-double border-4 border-[#eebda9] w-full h-[50px] rounded-2xl px-3"
            placeholder="Nome"
            required
          />
          <input
            type="text"
            name="sobrenome"
            value={formData.sobrenome}
            onChange={handleChange}
            className="border-double border-4 border-[#eebda9] w-full h-[50px] rounded-2xl px-3"
            placeholder="Sobrenome"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="border-double border-4 border-[#eebda9] w-full h-[50px] rounded-2xl px-3"
            placeholder="E-mail"
            required
          />
          <input
            type="password"
            name="senha"
            value={formData.senha}
            onChange={handleChange}
            className="border-double border-4 border-[#eebda9] w-full h-[50px] rounded-2xl px-3"
            placeholder="Senha"
            required
          />

          <button
            type="submit"
            className="bg-[#FFEBE3] w-full max-w-[250px] h-[50px] rounded-2xl mt-6"
          >
            Cadastrar
          </button>
        </form>
      </main>

      <footer className="flex justify-center pb-4">
        <Image src={photo} alt="flor" width={180} height={200} />
      </footer>
    </div>
  );
}
