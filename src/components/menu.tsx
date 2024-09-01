'use client'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet"
import { MainNavigation } from "./Sidebar/MainNavigation"
export function Menu() {
  return (
    <Sheet>
      <SheetTrigger>Open</SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetDescription>
            <MainNavigation />
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  )
}