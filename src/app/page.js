import Image from "next/image";
import photo from "./public/images/rodapé/flor.png"; // Imagem da Lotus
import flor from "./public/images/nav/logo.png"; // Imagem da Flor

export default function Home() {
  return (
    <div className="relative max-w-full bg-white p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">

      {/* Header section */}
      <header className="relative ">
        {/* Centering the text horizontally */}
        <div className="text-center">
          <h1 className="text-3xl text-slate-400 mb-4">
            Cadastrar
          </h1>
        </div>
        {/* Positioning the image on the top-left */}
        <div className="absolute top-0 left-4">
          <Image src={flor} alt="lotus" width={120} height={120} />
        </div>
      </header>
      
      {/* Centering the input fields */}
      <div className="flex items-center justify-center min-h-screen">
        <div className="w-[600px] space-y-6">
          <input
            type="text"
            className="bg-[#FFEBE3] w-full h-[50px] border rounded px-3"
            placeholder="Nome"
          />
          <input
            type="text"
            className="bg-[#FFEBE3] w-full h-[50px] border rounded px-3"
            placeholder="Sobrenome"
          />
          <input
            type="text"
            className="bg-[#FFEBE3] w-full h-[50px] border rounded px-3"
            placeholder="E-mail"
          />
        </div>
      </div>

      {/* Footer section */}
      <footer className="absolute bottom-4 left-4">
        <Image src={photo} alt="flor" width={180} height={200} />
      </footer>
    </div>
  );
}
