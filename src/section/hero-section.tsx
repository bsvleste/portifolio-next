import Image from "next/image";
import  bsvConding  from '@/assets/bsvcode.png';
import { ArrowDown, File, FileDown } from "lucide-react";
export function HeroSection(){
  return(
    <div className="py-32 md:py-48 relative lg:py-60" >
      <div className="md:hero-ring md:w-[670px] md:h-[670px]"></div>
      <div className="md:hero-ring md:w-[870px] md:h-[870px]"></div>
      <div className="md:hero-ring md:w-[1070px]  md:h-[1070px]"></div>
      <div className="container">
        <div className="flex flex-col items-center">
          <Image src={bsvConding} alt="logo bsvcode"/>
          <div className="rounded mt-2 bg-zinc-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-2">
            <div className="rounded-full w-2 h-2 bg-emerald-600"></div>
            <div className="text-sm font-medium">Disponível para novos projetos</div>
          </div>
        </div>
        <div className="max-w-lg mx-auto">
          <h1 className="md:text-5xl text-3xl mt-8 text-center">Construindo uma experiência de usuário excepcional</h1>
          <p className="mt-4 text-center text-zinc-100/60 md:text-xl" >
          Sou especialista em transformar designs em aplicações web funcionais e de alto desempenho. Vamos discutir seu próximo projeto.
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
          <button className="inline-flex items-center gap-2 border border-zinc-100/10 rounded-xl px-6 h-12">
            <span className="font-semibold">Abaixe meu CV</span>
            <FileDown />
          </button>
          <button className=" inline-flex items-center gap-2 border border-zinc-100/10 rounded-xl px-6 h-12 bg-zinc-200 text-zinc-800">
            <span className="font-semibold">Explore meus projetos</span>
            <ArrowDown />
          </button>
        </div>
      </div>
    </div>
  )
}