"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import logo from "../assits/logo.png"
import Image from "next/image"
export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="w-full py-4 px-4 sm:px-6 md:px-12 lg:px-24 flex items-center justify-between">
      <div className="flex items-center">
        <Link href="/" className="mr-4 sm:mr-8">
        <Image src={logo} alt="logo" />        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-white bg-transparent hover:bg-white/10">
                Products
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-4 w-[400px]">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <a className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-indigo-500/20 to-purple-500/20 p-6 no-underline outline-none focus:shadow-md">
                        <div className="mb-2 mt-4 text-lg font-medium text-white">Trading Platform</div>
                        <p className="text-sm leading-tight text-white/80">
                          Advanced trading tools for cryptocurrency enthusiasts
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-white bg-transparent hover:bg-white/10">
                Company
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4">
                  <li>
                    <NavigationMenuLink asChild>
                      <a className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-white/10 hover:text-white focus:bg-white/10 focus:text-white">
                        <div className="text-sm font-medium leading-none text-white">About Us</div>
                        <p className="line-clamp-2 text-sm leading-snug text-white/80">
                          Learn about our mission and vision
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-white bg-transparent hover:bg-white/10">
                Learn
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4">
                  <li>
                    <NavigationMenuLink asChild>
                      <a className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-white/10 hover:text-white focus:bg-white/10 focus:text-white">
                        <div className="text-sm font-medium leading-none text-white">Resources</div>
                        <p className="line-clamp-2 text-sm leading-snug text-white/80">
                          Educational content about cryptocurrency
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/support" legacyBehavior passHref>
                <NavigationMenuLink className="text-white hover:text-white/80">Support</NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-white hover:bg-white/10"
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-16 left-0 right-0 bg-[#0F0B2D] border-t border-white/10 p-4 md:hidden z-50">
          <div className="flex flex-col space-y-4">
            <Link href="#" className="text-white hover:text-white/80 py-2">
              Products
            </Link>
            <Link href="#" className="text-white hover:text-white/80 py-2">
              Company
            </Link>
            <Link href="#" className="text-white hover:text-white/80 py-2">
              Learn
            </Link>
            <Link href="#" className="text-white hover:text-white/80 py-2">
              Support
            </Link>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white w-full">Get Started</Button>
          </div>
        </div>
      )}

      <Button className="hidden md:inline-flex bg-blue-600 hover:bg-blue-700 text-white">Get Started</Button>
    </header>
  )
}
