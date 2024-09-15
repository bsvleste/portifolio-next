export function Header(){
  return(
    <div className="flex justify-center fixed items-center top-3">
      <nav className="flex gap-1 p-0.5 border  border-zinc-100/20 rounded-full bg-zinc-100/10 backdrop-blur">
        <a href="" className="nav-item ">Home</a>
        <a href="" className="nav-item ">Sobre</a>
        <a href="" className="nav-item ">Projetos </a>
        <a href=""className="nav-item bg-zinc-100 text-zinc-900 hover:bg-zinc-100/70 hover:text-zinc-900 " >Contato</a>
      </nav>
    </div>
  )
}