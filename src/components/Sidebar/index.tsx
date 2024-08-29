'use client'
import { Logo } from "../Logo";
import { Menu, Search } from 'lucide-react'
import * as Collapsible from '@radix-ui/react-collapsible';
import { MainNavigation } from "./MainNavigation";
import { Profile } from "./Profile";

export function Sidebar() {
  return (
    <Collapsible.Root className="lg:h-screen lg:right-auto lg:w-80 fixed  left-0 top-0     right-0 z-20 flex flex-col gap-6 border-b lg:border-r p-4 border-zinc-700 sm:px-5 sm:py-8 bg-zinc-900 ">
      <div className="flex items-center justify-between">
        <Logo />
        <Collapsible.Trigger asChild className="lg:hidden">
          <button className="text-white">
            <Menu className="h-6 w-6" />
          </button>
        </Collapsible.Trigger>
      </div>
      <Collapsible.Content forceMount className="flex flex-1 flex-col gap-6 data-[state=closed]:hidden lg:data-[state=closed]:flex  ">
        <MainNavigation />
        <div className="h-px bg-zinc-300 dark:bg-zinc-700"></div>
        <Profile />
      </Collapsible.Content>
    </Collapsible.Root>
  )
}