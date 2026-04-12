"use client"

import * as React from "react"
import Link from "next/link"
import { Moon, Sun, Scale } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  const { setTheme, theme } = useTheme()

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        
        {/* Logo Section */}
        <Link href="/" className="flex items-center gap-2 font-serif text-xl font-bold tracking-tighter text-primary">
          <Scale className="h-6 w-6 text-brand-gold" />
          <span>ADVOCATE <span className="text-brand-peach">HABIBA</span></span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link href="#about" className="hover:text-brand-peach transition-colors">About</Link>
          <Link href="#services" className="hover:text-brand-peach transition-colors">Practice Areas</Link>
          <Link href="#contact" className="hover:text-brand-peach transition-colors">Contact</Link>
          
          {/* Theme Toggle Button */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          >
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>

          {/* Action Button */}
          <Button className="bg-primary text-white hover:bg-brand-peach hover:text-primary transition-all">
            Free Consultation
          </Button>
        </div>
      </div>
    </nav>
  )
}