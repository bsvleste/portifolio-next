import { Header } from "@/components/header";
import { About } from "@/section/about";
import { Contact } from "@/section/contact";
import { HeroSection } from "@/section/hero-section";
import { Projects } from "@/section/projects";
export default function Home() {
  return (
    <div className='flex justify-center items-center w-full font-sans'>
      <div className='flex justify-center flex-col items-center  w-full '>
        <Header />
        <HeroSection />
        <Projects />
        <About />
        <Contact />
      </div>
    </div>
  )
}

