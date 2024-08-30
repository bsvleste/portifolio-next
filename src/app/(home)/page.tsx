import { Github, Linkedin } from "lucide-react";
import Image from "next/image";
import bsvConding from '@/assets/bsvcoding.png'
export default function Home() {
  return (
    <div className='h-screen  flex justify-around items-center w-full flex-col sm:flex-row' id="#home">
      <div className="flex gap-4 flex-col">
        <div>
          <p className="text-zinc-200  font-normal leading-8">Olá eu sou,</p>
          <h1 className="text-zinc-200  text-xl lg:text-3xl font-black">Bruno de Souza Valeiro , <br /> programador fullstack javascript</h1>
          <p className="text-zinc-200  font-normal leading-8 ">Seja Bem vindo ao meu portifolio</p>
        </div>
        <div>
          <button className="p-3 bg-gray-600 text-zinc-300 rounded-2xl font-extrabold   hover:bg-gray-700">Saiba mais sobre mim</button>
        </div>
        <div className="flex gap-4">
          <a href="">
            <Github className="text-zinc-600 hover:text-zinc-700" />
          </a>
          <a href="">
            <Linkedin className="text-zinc-600 hover:text-zinc-700" />
          </a>
        </div>
      </div>
      <div className='order-1 sm:order-2  hidden sm:flex '>
        <Image src={bsvConding} alt='bsvConding' className="object-scale-down md:w-[380px] md:h-[380px]" />
      </div>
    </div>
  )
}
{/* <div className="flex justify-between flex-col">
        <p className="text-zinc-200 font-sans font-normal leading-8">Olá eu sou,</p>
        <h1 className="text-zinc-200 font-sans text-2xl font-black">Bruno de Souza Valeiro , <br /> programador fullstack javascript</h1>
        <p className="text-zinc-200 font-sans font-normal leading-8 ">Seja Bem vindo ao meu portifolio</p>
        <div>
          <button className="p-3 bg-gray-600 text-zinc-300 rounded-2xl font-extrabold font-sans  hover:bg-gray-700">Saiba mais sobre mim</button>
        </div>
        <div className="flex gap-4">
          <a href="">
            <Github className="text-zinc-600 hover:text-zinc-700" />
          </a>
          <a href="">
            <Linkedin className="text-zinc-600 hover:text-zinc-700" />
          </a>
        </div>
        <div className='order-1 sm:order-2  hidden sm:flex h-screen '>
          <Image src={bsvConding} alt='bsvConding' className="object-scale-down sm:w-[560px] sm:h-[560px]" />
        </div>
      </div> */}