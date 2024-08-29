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
  const className = asPath === props.href ? activeClassName : '';
  return (
    <Link  {...props}>
      {cloneElement(children, {
        className
      })}
    </Link>
  )
}