
import { Info, Home, FolderOpen, Code2, BadgeDollarSign } from 'lucide-react'
import { ActiveLink } from '../ActiveLink'
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { twMerge } from 'tailwind-merge';
export function MainNavigation() {
  const currentPath = usePathname()
  return (
    <nav className={`space-y-0.5`}>
      <Link href='/' className={currentPath === "/" ? "text-emerald-600 font-semibold cursor-default " : "text-zinc-400 "
      } >
        <div className='flex gap-2 items-center hover:text-emerald-500 px-2 py-3 '>
          <Home />
          <span className='uppercase'>Home</span>
        </div>
      </Link>
      <Link href='/portifolio' className={currentPath === "/portifolio" ? "text-emerald-600 font-semibold cursor-default  hover:not-allowed " : "text-zinc-400 "
      } >
        <div className='flex gap-2 items-center hover:text-emerald-600 px-2 py-3'>
          <FolderOpen />
          <span className='uppercase'>portifolio</span>
        </div>
      </Link>
      <Link href='/sobre' className={currentPath === "/sobre" ? "text-emerald-600 font-semibold cursor-default  hover:not-allowed " : "text-zinc-400 "
      } >
        <div className='flex gap-2 items-center hover:text-emerald-600 px-2 py-3'>
          <Info />
          <span className='uppercase'>sobre</span>
        </div>
      </Link>

      <Link href='/techs' className={currentPath === "/techs" ? "text-emerald-600 font-semibold cursor-default  hover:not-allowed " : "text-zinc-400 "
      } >
        <div className='flex gap-2 items-center hover:text-emerald-600 px-2 py-3'>
          <Code2 />
          <span className='uppercase'>minhas techs</span>
        </div>
      </Link>
    </nav>
  )
}



