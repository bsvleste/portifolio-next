
import { Info, Home, FolderOpen, Code2, BadgeDollarSign } from 'lucide-react'
import { ActiveLink } from '../ActiveLink'
import { roboto } from '../Fonts'


export function MainNavigation() {
  return (
    <nav className={`space-y-0.5`}>
      <ActiveLink href='/#home' activeClassName="active" >
        <div>
          <Home />
          <span>Home</span>
        </div>
      </ActiveLink>
      <ActiveLink href='/#sobre' activeClassName="active">
        <div>
          <Info />
          <span>Sobre</span>
        </div>
      </ActiveLink>
      <ActiveLink href='/#portifolio' activeClassName="active">
        <div>
          <FolderOpen />
          <span>Portfólio</span>
        </div>
      </ActiveLink>
      <ActiveLink href='/#techs' activeClassName="active">
        <div>
          <Code2 />
          <span>Minhas Techs</span>
        </div>
      </ActiveLink>
      <ActiveLink href='/#experiencia' activeClassName="active">
        <div>
          <BadgeDollarSign />
          <span>Experiencia Profissional</span>
        </div>
      </ActiveLink>
    </nav>
  )
}