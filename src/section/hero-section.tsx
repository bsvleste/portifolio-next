import Image from "next/image";
import bsvConding from '@/assets/bsvcode.png';
import { ArrowDown, File, FileDown, Sparkle } from "lucide-react";
import { HeroOrbit } from "@/components/hero-orbit";
export function HeroSection() {
  return (
    <div className="py-32 md:py-64 relative z-0 " >
      <div className="md:hero-ring md:w-[670px] md:h-[670px]"></div>
      <div className="md:hero-ring md:w-[870px] md:h-[870px]"></div>
      <div className="md:hero-ring md:w-[1070px]  md:h-[1070px]"></div>
      <div className="md:hero-ring md:w-[1270px]  md:h-[1270px]"></div>
      <HeroOrbit size={800} rotation={0}>
        <Sparkle color="#3d7a4d" fill='#3d7a4d' size={55} />
      </HeroOrbit>
      <HeroOrbit size={900} rotation={150}>
        <Sparkle color="#3d7a4d" fill='#3d7a4d' size={55} />
      </HeroOrbit>
      <HeroOrbit size={600} rotation={-75}>
        <Sparkle color="#3d7a4d" fill='#3d7a4d' size={60} />
      </HeroOrbit>
      <HeroOrbit size={450} rotation={0}>
        <Sparkle color="#818181" fill='#818181' size={20} />
      </HeroOrbit>
      <HeroOrbit size={450} rotation={-80}>
        <Sparkle color="#818181" fill='#818181' size={20} />
      </HeroOrbit>
      <HeroOrbit size={600} rotation={90}>
        <Sparkle color="#3d7a4d" fill='#3d7a4d' size={35} />
      </HeroOrbit>
      <HeroOrbit size={590} rotation={-180}>
        <Sparkle color="#818181" fill='#818181' size={15} />
      </HeroOrbit>
      <HeroOrbit size={400} rotation={100}>
        <Sparkle color="#818181" fill='#818181' size={15} />
      </HeroOrbit>
      <HeroOrbit size={700} rotation={90}>
        <Sparkle color="#818181" fill='#818181' size={15} />
      </HeroOrbit>
      <HeroOrbit size={700} rotation={-90}>
        <Sparkle color="#818181" fill='#818181' size={15} />
      </HeroOrbit>
      <HeroOrbit size={850} rotation={-30}>
        <Sparkle color="#818181" fill='#818181' size={40} />
      </HeroOrbit>
      <div className="container">
        <div className="flex flex-col items-center">
          <Image src={bsvConding} alt="logo bsvcode" />
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