import React, { useState } from 'react';
import CadastroInterface from './cadastroInterface';

export default function CadastroPage() {
  const [formData, setFormData] = useState({
    nome: '',
    sobrenome: '',
    email: '',
    senha: '',
  });

  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode fazer a lógica de cadastro
    setSuccessMessage('Cadastro realizado com sucesso!');
    setErrorMessage('');
  };

  return (
    <CadastroInterface
      formData={formData}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      errorMessage={errorMessage}
      successMessage={successMessage}
    />
  );
}
