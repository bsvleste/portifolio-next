"use client";
import Link, { LinkProps } from 'next/link'
import { usePathname } from 'next/navigation';
import { ReactElement, cloneElement } from 'react'

interface ActiveLinkProps extends LinkProps {
  children: ReactElement;
  activeClassName: string;

}
export function ActiveLink({ children, activeClassName, ...props }: ActiveLinkProps) {
  const asPath = usePathname();
  const className = asPath === props.href ? 'text-esmerald-500' : ' text-zinc-400 hover:text-zinc-200';
  return (
    <Link  {...props}>
      {cloneElement(children, {
        className
      })}
    </Link>
  )
}