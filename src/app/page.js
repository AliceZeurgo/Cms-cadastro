import Image from "next/image";
import photo from "./public/images/rodapé/flor.png"; // Imagem da Lotus
import flor from "./public/images/nav/logo.png"; // Imagem da Flor

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-[family-name:var(--font-geist-sans)] flex flex-col">
      <header className="flex flex-row h-[20%] p-4 items-center">
        
        <div className="w-full h-52 flex items-center z-10 gap-5">
        <Image src={flor} alt="logo" className="w-24 h-16" />
          <h1 className="font-semibold text-4xl text-gray-400 text-center">Cadastro</h1>
        </div>
      </header> 

      <main className="flex-grow flex items-start justify-center p-20">
        <form className="w-[600px] flex flex-col items-center space-y-6"> {/* Ajuste aqui */}
          <input
            type="text"
            className=" border-double border-4 border-[#eebda9] w-full h-[50px] rounded-2xl px-3"
            placeholder="Nome"
            required
          />
          <input
            type="text"
            className="border-double border-4 border-[#eebda9] w-full h-[50px] rounded-2xl px-3"  
            placeholder="Sobrenome"
            required
          />
          <input
            type="email"
            className="border-double border-4 border-[#eebda9] w-full h-[50px] rounded-2xl px-3"
            placeholder="E-mail"
            required
          />
          <input
            type="password"
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

      <footer className="absolute bottom-4">
        <Image src={photo} alt="flor" width={180} height={200} />
      </footer>
    </div>
  );
}
