'use client';
import { Github } from 'lucide-react';
import { Linkedin } from 'lucide-react';
import Image from "next/image";
import bsvConding from '../../public/bsvcoding.png'
export default function Home() {
  return (
    <div className='max-w-template m-auto grid grid-cols-1 sm:grid-cols-app'>
      <div className='w-full flex justify-end space-y-5 flex-col order-2 sm:order-1 '>
        <div>
          <p className="text-zinc-200 font-sans font-normal leading-8">Olá eu sou,</p>
          <h1 className="text-zinc-200 font-sans text-2xl font-black">Bruno de Souza Valeiro , <br /> programador fullstack javascript</h1>
          <p className="text-zinc-200 font-sans font-normal leading-8 ">Seja Bem vindo ao meu portifolio</p>
        </div>
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
      </div>
      <div className='flex justify-end order-1 sm:order-2 '>
        <Image src={bsvConding} alt='bsvConding' className="object-scale-down sm:w-[560px] sm:h-[560px]" />
      </div>
    </div>
  )
}
