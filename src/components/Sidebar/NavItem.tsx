import { ElementType } from 'react'
import { ChevronDown } from 'lucide-react'
import { twMerge } from 'tailwind-merge'
export interface NavItemProps {
  title: string
  icon: ElementType
}
export function NavItem({ title, icon: Icon }: NavItemProps) {
  return (
    <a href="" className={twMerge(
      'group flex items-center gap-3 rounded px-3 py-2 font-sans',
      'hover:bg-zinc-800'
    )}>
      <Icon className='w-5 h-5 text-zinc-500 group-hover:text-violet-500' />
      <span className='font-medium text-zinc-100 group-hover:text-violet-500'>{title}</span>

    </a>

  )
}