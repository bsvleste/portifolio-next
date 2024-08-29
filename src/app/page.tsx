'use client';
import { Github } from 'lucide-react';
import { Linkedin } from 'lucide-react';
import Image from "next/image";
import bsvConding from '../../public/bsvcoding.png'
import { Sidebar } from '@/components/Sidebar';
import Portifolio from './portifolio/page';
import Principal from './home/page';
import Techs from './techs/page';
import Experiencia from './experiencia/page';
import Sobre from './sobre/page';
export default function Home() {
  return (
    <>

      <Principal />
      <Sobre />
      <Portifolio />
      <Techs />
      <Experiencia />
    </>
  )
}
