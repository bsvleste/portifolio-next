import Image from "next/image";

export function Profile() {
  return (
    <div className="grid grid-cols-profile items-center gap-3 ">
      <Image
        width={350}
        height={350}
        src={'https://github.com/bsvleste.png'}
        alt="foto de perfil"
        className="w-10 h-10 rounded-full  "
      />
      <div className="flex flex-col">
        <span className="text-sm font-semibold font-sans text-zinc-100">Bruno de Souza Valeiro</span>
        <span className="text-sm  text-zinc-400 font-sans">bvaleiro@gmail.com</span>
      </div>
    </div>
  )
}