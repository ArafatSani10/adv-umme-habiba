"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Moon, Sun, Home, User, Briefcase, Mail, Scale, Trophy, ShieldCheck } from "lucide-react"
import { useTheme } from "next-themes"
import { Skeleton } from "./skeleton"

const navItems = [
  { name: "Home", href: "home", icon: <Home size={18} strokeWidth={1.5} /> },
  { name: "Expertise", href: "expertise", icon: <Briefcase size={18} strokeWidth={1.5} /> },
  { name: "About", href: "about", icon: <User size={18} strokeWidth={1.5} /> },
  { name: "Why Choose Me", href: "why-choose-me", icon: <ShieldCheck size={18} strokeWidth={1.5} /> },
  { name: "Success", href: "success-stories", icon: <Trophy size={18} strokeWidth={1.5} /> },
  { name: "Contact", href: "contact", icon: <Mail size={18} strokeWidth={1.5} /> },
]

export default function Navbar() {
  const { setTheme, theme } = useTheme()
  const [mounted, setMounted] = React.useState(false)
  const [activeSection, setActiveSection] = React.useState("home")
  const [isVisible, setIsVisible] = React.useState(true)

  const handleScroll = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  React.useEffect(() => {
    setMounted(true)
  }, [])

  React.useEffect(() => {
    const sectionIds = navItems.map((item) => item.href)

    const updateActiveSection = () => {
      const threshold = window.innerHeight * 0.45
      let newActive = "home"

      sectionIds.forEach((id) => {
        const section = document.getElementById(id)
        if (!section) return

        const rect = section.getBoundingClientRect()
        if (rect.top <= threshold && rect.bottom > threshold) {
          newActive = id
        }
      })

      setActiveSection((prev) => (prev === newActive ? prev : newActive))
    }

    updateActiveSection()
    window.addEventListener('scroll', updateActiveSection, { passive: true })
    return () => window.removeEventListener('scroll', updateActiveSection)
  }, [])

  React.useEffect(() => {
    let lastScrollY = window.scrollY

    const handleScroll = () => {
      const currentScrollY = window.scrollY
      const scrollingDown = currentScrollY > lastScrollY
      const scrollThreshold = 100

      if (scrollingDown && currentScrollY > scrollThreshold) {
        setIsVisible(false)
      } else {
        setIsVisible(true)
      }

      lastScrollY = currentScrollY
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!mounted) return <nav className="fixed bottom-0 md:bottom-10 left-0 right-0 z-50 flex justify-center"><Skeleton className="w-full md:w-[550px] h-16 md:rounded-2xl" /></nav>

  return (
    <div className="fixed bottom-0 md:bottom-10 left-0 right-0 z-50 flex justify-center">
      <motion.nav 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: isVisible ? 0 : 100, opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="w-full md:w-auto flex items-center justify-between gap-2 md:gap-4 px-4 py-2 rounded-none md:rounded-2xl border-t md:border border-white/10 bg-background/80 backdrop-blur-xl shadow-2xl md:min-w-[550px]"
      >
        <div onClick={() => handleScroll("home")} className="cursor-pointer">
          <motion.div className="p-2 md:p-2.5 bg-brand-peach/10 rounded-xl text-brand-peach">
            <Scale size={20} strokeWidth={1.5} />
          </motion.div>
        </div>

        <div className="h-6 w-px bg-white/10" />

        <div className="flex items-center gap-0.5 md:gap-2 overflow-x-auto no-scrollbar">
          {navItems.map((item) => {
            const isActive = activeSection === item.href
            return (
              <button 
                key={item.name} 
                onClick={() => handleScroll(item.href)}
                className="focus:outline-none"
              >
                <motion.div
                  className={`flex items-center gap-2 px-2.5 md:px-3 py-2 rounded-xl transition-all ${isActive ? "text-brand-peach bg-white/5" : "text-muted-foreground"}`}
                >
                  <span className={isActive ? "text-brand-peach" : ""}>{item.icon}</span>
                  <span className="hidden md:block text-[13px] font-medium">{item.name}</span>
                </motion.div>
              </button>
            )
          })}
        </div>

        <div className="h-6 w-px bg-white/10" />

        <div className="flex items-center gap-2 md:gap-3">
          <motion.button
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="p-2 md:p-2.5 rounded-xl bg-white/5 text-muted-foreground"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </motion.button>
        </div>
      </motion.nav>
    </div>
  )
}