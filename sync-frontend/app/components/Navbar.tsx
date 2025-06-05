"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronDown, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import Icon4 from "@/assets/logo.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const productItems = [
    { name: "Analytics", href: "/products/analytics" },
    { name: "Dashboard", href: "/products/dashboard" },
    { name: "Reports", href: "/products/reports" },
  ]

  const companyItems = [
    { name: "About Us", href: "/company/about" },
    { name: "Team", href: "/company/team" },
    { name: "Careers", href: "/company/careers" },
    { name: "Contact", href: "/company/contact" },
  ]

  const learnItems = [
    { name: "Documentation", href: "/learn/docs" },
    { name: "Tutorials", href: "/learn/tutorials" },
    { name: "Blog", href: "/learn/blog" },
    { name: "Community", href: "/learn/community" },
  ]

  return (
    <nav className="py-10 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image
                src={Icon4}
                alt="Logo"
                width={95}
                height={94}
               
              />
            </Link>
          </div>

          {/* Desktop Navigation - Right Side */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Navigation Items */}
            <div className="flex items-baseline space-x-8">
              {/* Products Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="text-white hover:text-white hover:bg-white/10 font-Montserrat flex items-center gap-1"
                  >
                    Products
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-white border border-gray-200 shadow-lg">
                  {productItems.map((item) => (
                    <DropdownMenuItem key={item.name} asChild>
                      <Link
                        href={item.href}
                        className="font-Montserrat text-gray-700 hover:text-[#2D52EC] hover:bg-gray-50"
                      >
                        {item.name}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Company Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="text-white hover:text-white hover:bg-white/10 font-Montserrat flex items-center gap-1"
                  >
                    Company
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-white border border-gray-200 shadow-lg">
                  {companyItems.map((item) => (
                    <DropdownMenuItem key={item.name} asChild>
                      <Link
                        href={item.href}
                        className="font-Montserrat text-gray-700 hover:text-[#2D52EC] hover:bg-gray-50"
                      >
                        {item.name}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Learn Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="text-white hover:text-white hover:bg-white/10 font-Montserrat flex items-center gap-1"
                  >
                    Learn
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-white border border-gray-200 shadow-lg">
                  {learnItems.map((item) => (
                    <DropdownMenuItem key={item.name} asChild>
                      <Link
                        href={item.href}
                        className="font-Montserrat text-gray-700 hover:text-[#2D52EC] hover:bg-gray-50"
                      >
                        {item.name}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Support Link */}
              <Link
                href="/support"
                className="text-white hover:text-white hover:bg-white/10 px-3 py-2 rounded-md text-sm font-medium font-Montserrat transition-colors"
              >
                Support
              </Link>
            </div>

            {/* Get Started Button */}
            <Link href="/get-started">
              <Button
                className="bg-[#2D52EC]  hover:bg-[#2D52EC]/90 text-white font-Montserrat px-16 py-6  rounded-lg transition-colors"
              >
                Get Started
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white hover:text-white hover:bg-white/10"
                >
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-[#1E1B4B] border-l border-[#2D52EC]/20">
                <div className="flex flex-col space-y-4 mt-8">
                  {/* Mobile Products */}
                  <div className="space-y-2">
                    <h3 className="text-white font-Montserrat font-semibold">Products</h3>
                    {productItems.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="block text-gray-300 hover:text-white font-Montserrat pl-4 py-1"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>

                  {/* Mobile Company */}
                  <div className="space-y-2">
                    <h3 className="text-white font-Montserrat font-semibold">Company</h3>
                    {companyItems.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="block text-gray-300 hover:text-white font-Montserrat pl-4 py-1"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>

                  {/* Mobile Learn */}
                  <div className="space-y-2">
                    <h3 className="text-white font-Montserrat font-semibold">Learn</h3>
                    {learnItems.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="block text-gray-300 hover:text-white font-Montserrat pl-4 py-1"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>

                  {/* Mobile Support */}
                  <Link
                    href="/support"
                    className="text-white hover:text-gray-300 font-Montserrat py-2"
                    onClick={() => setIsOpen(false)}
                  >
                    Support
                  </Link>

                  {/* Mobile Get Started */}
                  <Link href="/get-started" onClick={() => setIsOpen(false)}>
                    <Button
                      className="bg-[#2D52EC] hover:bg-[#2D52EC]/90 text-white font-Montserrat w-full mt-4 "
                    >
                      Get Started
                    </Button>
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar