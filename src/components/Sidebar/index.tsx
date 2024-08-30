'use client'
import { Logo } from "../Logo";
import { Menu, Search } from 'lucide-react'
import * as Collapsible from '@radix-ui/react-collapsible';
import { MainNavigation } from "./MainNavigation";
import { Profile } from "./Profile";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
export function Sidebar() {
  return (

    <div className="lg:h-screen lg:right-auto lg:w-80 fixed  left-0 top-0     right-0 z-20 flex flex-col gap-6 border-b lg:border-r p-4 border-zinc-700 sm:px-5 sm:py-8 bg-zinc-900 ">
      <div className="flex items-center justify-between">
        <Logo />
        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger><Menu /></SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Are you absolutely sure?</SheetTitle>
                <SheetDescription>
                  <MainNavigation />
                  <div className="h-px bg-zinc-300 dark:bg-zinc-700"></div>
                  <Profile />
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </div>
      <div className="hidden lg:flex flex-1 flex-col gap-6 ">
        <MainNavigation />
        <div className="h-px bg-zinc-300 dark:bg-zinc-700"></div>
        <Profile />
      </div>
    </div>

  )
}
