// lib/auth.js

export const cadastrarUsuario = async (nome, sobrenome, email, senha) => {
    const urlCadastro = 'https://back-login.vercel.app/usuarios'; // Substitua pela URL da sua API de cadastro
  
    try {
      // Envia uma solicitação POST para a API
      const response = await fetch(urlCadastro, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nome,
          sobrenome,
          email,
          senha,
        }),
      });
  
      const result = await response.json();
  
      if (response.ok) {
        // Cadastro bem-sucedido
        return { success: true };
      } else {
        // Erro no cadastro
        return { success: false, message: result.message || 'Erro ao cadastrar usuário.' };
      }
    } catch (error) {
      console.error('Erro ao cadastrar usuário:', error);
      return { success: false, message: 'Ocorreu um erro ao tentar cadastrar o usuário.' };
    }
  };
  