import { Header } from "@/components/header";
import { HeroSection } from "@/section/hero-section";
export default function Home() {
  return (
    <div className='flex justify-center font-sans'>
      <Header />
      <HeroSection />
    </div>
  )
}

/* 
<div className='h-screen  flex justify-around items-center w-full flex-col sm:flex-row' id="#home">
      <div className="flex gap-4 flex-col">
        <div>
          <p className="text-zinc-200  font-normal leading-8">Olá eu sou,</p>
          <h1 className="text-zinc-200  text-xl lg:text-3xl font-black">Bruno de Souza Valeiro , <br /> programador fullstack javascript</h1>
          <p className="text-zinc-200  font-normal leading-8 ">Seja bem vindo ao meu portifolio</p>
        </div>
        <div>
          <Link href='' className="inline-flex gap-2 bg-emerald-600 px-3 py-3 rounded-xl hover:bg-emerald-700"
            download="Curriculo Bruno de Souza Valeiro"
          >
            <FileText size={22} />
            Curriculo
          </Link>
          <div className="flex gap-4 mt-4">
            <Link href="https://github.com/bsvleste" >
              <Github className="text-emerald-600 hover:text-emerald-700" />
            </Link>
            <Link href="https://www.linkedin.com/in/bruno-souza-valeiro/">
              <Linkedin className="text-emerald-600 hover:text-emerald-700" />
            </Link>
          </div>
        </div>
      </div>
      <div className='order-1 sm:order-2  hidden sm:flex '>
        <Image src={bsvConding} alt='bsvConding' className="object-scale-down md:w-[380px] md:h-[380px]" />
      </div>
    </div> */