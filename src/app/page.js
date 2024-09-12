import Image from "next/image";
import photo from "./public/Group.png"; // Imagem da Lotus
import flor from "./public/flor.png"; // Imagem da Flor

export default function Home() {
  return (
    <div className="relative min-h-screen bg-white p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      {/* Imagem no canto superior esquerdo */}
      <div className="absolute top-0 left-0 p-4">
        <Image src={photo} alt="lotus" width={150} height={150} />
      </div>

      {/* Container para centralizar a div com inputs */}
      <div className="flex items-center justify-center min-h-screen">
        <div className="w-[600px] space-y-6"> {/* Mantém a largura original */}
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

      {/* Imagem no canto inferior esquerdo */}
      <div className="absolute bottom-4 left-4">
        <Image src={flor} alt="flor" width={230} height={200} />
      </div>
    </div>
  );
}
